import React from 'react';

import GridRow from 'arui-feather/grid-row';
import Heading from "arui-feather/heading";

import {InformationPopup} from "../information-popup";

type HeadingBlockProps = {
    headingText: string;
    popupText: string;
};

export const HeadingBlock: React.FC<HeadingBlockProps> = ({ headingText, popupText }) => {

    return (
        <GridRow justify="left" gutter={0}>
            <Heading size="m" hasDefaultMargins={false}>
                {headingText}
            </Heading>
            <InformationPopup text={popupText} directions={['right-center', 'bottom-center', 'top-center']}/>
        </GridRow>
    );
};
