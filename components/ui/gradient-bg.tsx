import { cn } from '@/lib/utils';
import Spline from '@splinetool/react-spline/next';
import { Suspense } from 'react';

export default function GradientBg({ className }: { className?: string }) {
    return (
        <Suspense fallback={'...'}>
            <div className={cn(`fixed inset-0 w-full h-full -z-50`, className)}>
                <Spline
                    scene="https://prod.spline.design/KKhE5iCVfiAiyJSQ/scene.splinecode"
                />
            </div>
        </Suspense>
    );
}
