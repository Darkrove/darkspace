import { Icons } from '../LucideIcons.js'
import { cn } from '../../lib/utils'

import * as React from 'react'
import hotToast, { Toaster as HotToaster } from 'react-hot-toast'

export const Toaster = HotToaster

export function Toast({ visible, className, ...props }) {
    return (
        <div
            className={cn(
                'min-h-16 mb-2 flex w-[350px] flex-col items-start gap-1 rounded-xl bg-white px-6 py-4 shadow-lg',
                visible && 'animate-in slide-in-from-bottom-5',
                className
            )}
            {...props}
        />
    )
}

Toast.Icon = function ToastIcon({ name, className, ...props }) {
    const Icon = Icons[name]

    if (!Icon) {
        return null
    }

    return (
        <div className='flex h-5 w-5 items-center justify-center rounded-full'>
            <Icon className={cn('h-4 w-4', className)} {...props} />
        </div>
    )
}

Toast.Title = function ToastTitle({ className, ...props }) {
    return <p className={cn('text-sm font-medium', className)} {...props} />
}

Toast.Description = function ToastDescription({
    className,
    ...props
}) {
    return <p className={cn('text-sm opacity-80', className)} {...props} />
}

export function toast(opts) {
    const { icon, title, message, type = 'default', duration = 3000 } = opts

    return hotToast.custom(
        ({ visible }) => (
            <Toast
                visible={visible}
                className={cn({
                    'bg-red-600 text-white': type === 'error',
                    'bg-zinc-600 text-white': type === 'success',
                })}>
                <div className="flex flex-row space-x-2">
                    <Toast.Icon name={icon} />
                    <div className="flex flex-col">
                        <Toast.Title>{title}</Toast.Title>
                        {message && <Toast.Description>{message}</Toast.Description>}
                    </div>
                </div>


            </Toast>
        ),
        { duration }
    )
}