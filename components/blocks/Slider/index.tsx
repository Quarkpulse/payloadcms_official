import * as React from 'react'
import { SliderProvider, SliderProgress, SliderNav, SliderTrack, Slide } from '@faceless-ui/slider'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { Gutter } from '@components/Gutter'
import { Page } from '../../../payload-types'
import { ArrowIcon } from '../../icons/ArrowIcon'
import { ImageCard } from './ImageCard'
import { QuoteCard } from './QuoteCard'
import { useComputedCSSValues } from '../../providers/ComputedCSSValues'
import { PixelBackground } from '../../PixelBackground'

import classes from './index.module.scss'

const cardTypes = {
  imageSlider: ImageCard,
  quoteSlider: QuoteCard,
}

type Props = Extract<Page['layout'][0], { blockType: 'slider' }>

export const SliderBlock: React.FC<Props> = ({ sliderFields }) => {
  const { sliderType } = sliderFields

  const slides = sliderType === 'imageSlider' ? sliderFields.imageSlides : sliderFields.quoteSlides

  if (!slides || slides.length === 0) return null

  const CardToRender = cardTypes[sliderType]
  const withPixelBackground = sliderType === 'quoteSlider'

  return (
    <div
      className={[classes.slider, withPixelBackground && classes.withPixelBackground]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter>
        <Grid>
          <Cell className={classes.controlsWrap}>
            <SliderProgress
              style={{
                height: '1px',
                backgroundColor: 'var(--theme-elevation-200)',
              }}
              indicator={{
                style: {
                  height: '2px',
                  backgroundColor: 'var(--theme-elevation-500)',
                },
              }}
            />

            <SliderNav
              className={classes.sliderNav}
              prevButtonProps={{
                className: [classes.navButton, classes.prevButton].filter(Boolean).join(' '),
                children: <ArrowIcon rotation={225} />,
              }}
              nextButtonProps={{
                className: classes.navButton,
                children: <ArrowIcon rotation={45} />,
              }}
            />
          </Cell>
        </Grid>
      </Gutter>

      <SliderTrack>
        {slides.map((slide, index) => {
          return (
            <Slide
              key={index}
              index={index}
              className={[classes.slide, classes[`slideType--${sliderType}`]]
                .filter(Boolean)
                .join(' ')}
            >
              <CardToRender {...slide} />
            </Slide>
          )
        })}
      </SliderTrack>

      {withPixelBackground && (
        <Gutter className={classes.pixelContainer}>
          <Grid>
            <Cell start={4} cols={9} className={classes.pixelCell}>
              <PixelBackground />
            </Cell>
          </Grid>
        </Gutter>
      )}
    </div>
  )
}

export const Slider: React.FC<Props> = props => {
  const { gutterH } = useComputedCSSValues()
  const { sliderFields } = props

  return (
    <SliderProvider
      slidesToShow={sliderFields?.sliderType === 'quoteSlider' ? 2.5 : 1.5}
      alignLastSlide="trackLeft"
      scrollOffset={gutterH}
    >
      <SliderBlock {...props} />
    </SliderProvider>
  )
}
