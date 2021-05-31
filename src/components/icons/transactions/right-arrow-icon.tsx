import React, { FC, SVGAttributes } from 'react';

export const RightArrowIcon: FC<SVGAttributes<SVGElement>> = ({
    ...rest
}: React.SVGAttributes<SVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none" { ...rest }>
        <path d="M16 2.00101V10H2V22H16V30L30 16L16 2.00101Z" fill="#339F7B"/>
    </svg>
);
