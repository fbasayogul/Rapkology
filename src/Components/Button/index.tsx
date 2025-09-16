import React from 'react'
import clsx from 'clsx'

type ButtonProps = {
  text?: string
  variant?: 'default' | 'twitch' | 'skew'
  icon?: 'star' | 'heart'
  arrowIcon?: boolean
  className?: string
  skewColor?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'default',
  icon,
  arrowIcon,
  className,
  skewColor,
  onClick,
}) => {
  const variants = {
    default:
      'px-6 py-3 mx-md:px-3 max-md:py-2 flex items-center justify-center',
    twitch: 'rounded-lg px-4 py-3 max-md:px-3 max-md:py-2',
    skew: '',
  }

  return (
    <button
      className={clsx(
        'relative flex cursor-pointer items-center gap-x-2 bg-white text-sm font-bold text-black',
        variant === 'skew' ? '!bg-transparent' : null,
        variants[variant],
        className
      )}
      onClick={onClick}
      type="button"
    >
      {variant === 'twitch' ? <img src={`/icon/${icon}.svg`} /> : null}
      {variant === 'skew' ? (
        <span
          className="absolute inset-0 translate-x-1 translate-y-1 bg-black"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
          }}
        ></span>
      ) : null}

      <span
        className={clsx(
          '',
          variant === 'skew'
            ? 'block bg-[#F0E74D] px-6 py-3 whitespace-nowrap'
            : null,
          skewColor
        )}
        style={{
          clipPath:
            variant === 'skew' ? 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' : '',
        }}
      >
        {text}
      </span>
      {arrowIcon ? <img src={`/icon/arrow.svg`} /> : null}
    </button>
  )
}
