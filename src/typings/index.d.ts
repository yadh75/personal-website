export interface ComponentWithChildren {
    children: React.ReactNode;
}

export type CustomHookReturn<R, E> = [R, boolean | null, E | null];
