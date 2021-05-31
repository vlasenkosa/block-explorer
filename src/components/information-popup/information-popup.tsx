import React, {
    useState, useCallback, useRef, useEffect,
} from 'react';

import InfoIcon from 'arui-feather/icon/ui/info';
import Popup, { PopupDirectionsFieldType } from 'arui-feather/popup';
import IconButton from 'arui-feather/icon-button';

import styles from './information-popup.module.css';

type InformationPopupProps = {
    text: string;
    directions: readonly PopupDirectionsFieldType[];
};

export const InformationPopup: React.FC<InformationPopupProps> = ({ text, directions }) => {
    const popupRef = useRef<typeof Popup>(null);
    const iconButtonRef = useRef<typeof IconButton>(null);

    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleTogglePopup = useCallback(() => {
        setPopupVisible((prevState) => !prevState);
    }, []);

    useEffect(() => {
        if (popupRef.current && iconButtonRef.current) {
            popupRef.current.setTarget(iconButtonRef.current.getNode());
        }
    }, []);

    return (
        <div>
            <IconButton
                ref={ iconButtonRef }
                onClick={ handleTogglePopup }
                size="s"
                onMouseEnter={ handleTogglePopup }
                onMouseLeave={ handleTogglePopup }
            >
                <InfoIcon size="s" />
            </IconButton>
            <Popup
                className={ styles.popup }
                ref={ popupRef }
                directions={ directions }
                size="s"
                type="tooltip"
                visible={ isPopupVisible }
            >
                { text }
            </Popup>
        </div>
    );
};
