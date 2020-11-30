import React from "react";
import { useRecoilValue } from "recoil";
import { css } from "emotion";
import classNames from "classnames";
import { AccordionItem } from "@webiny/ui/Accordion";
import { Cell, Grid } from "@webiny/ui/Grid";
import { activeElementSelector } from "@webiny/app-page-builder/editor/recoil/modules";
import ElementAnimation from "@webiny/app-page-builder/render/components/ElementAnimation";
import useUpdateHandlers from "../useUpdateHandlers";
// Components
import DurationInput from "../components/SliderWithInput";
import Select from "../components/Select";
import Input from "../components/Input";
import { ContentWrapper } from "../components/StyledComponents";
// Icon
import { ReactComponent as AnimationIcon } from "./round-movie_filter-24px.svg";
import { ReactComponent as TimerIcon } from "./icons/round-av_timer-24px.svg";

const classes = {
    grid: css({
        "&.mdc-layout-grid": {
            padding: 0,
            marginBottom: 24
        }
    }),
    animationTypeSelectWrapper: css({}),
    inputWrapper: css({
        "& .mdc-text-field": {
            width: "100% !important",
            margin: "0px !important"
        }
    }),
    animationEasingSelectWrapper: css({})
};

const DATA_NAMESPACE = "data.settings.animation";
type SettingsPropsType = {
    animation: any;
};
const Settings: React.FunctionComponent<SettingsPropsType> = () => {
    const element = useRecoilValue(activeElementSelector);

    const { getUpdateValue, getUpdatePreview } = useUpdateHandlers({
        element,
        dataNamespace: DATA_NAMESPACE
    });

    return (
        <AccordionItem
            icon={<AnimationIcon />}
            title={"Animation"}
            description={"Align the inner content of an element."}
        >
            <ContentWrapper direction={"column"}>
                <Grid className={classes.grid}>
                    <Cell span={12}>
                        <Select
                            className={classes.animationTypeSelectWrapper}
                            label={"Animation"}
                            valueKey={DATA_NAMESPACE + ".name"}
                            updateValue={getUpdateValue("name")}
                        >
                            <option value="">No animation</option>
                            <optgroup label="Fade">
                                <option value="fade">Fade</option>
                                <option value="fade-up">Fade Up</option>
                                <option value="fade-down">Fade Down</option>
                                <option value="fade-left">Fade Left</option>
                                <option value="fade-right">Fade Right</option>
                                <option value="fade-up-right">Fade Up Right</option>
                                <option value="fade-up-left">Fade Up Left</option>
                                <option value="fade-down-right">Fade Down Right</option>
                                <option value="fade-down-left">Fade Down Left</option>
                            </optgroup>
                            <optgroup label="Flip">
                                <option value="flip-up">Flip Up</option>
                                <option value="flip-down">Flip Down</option>
                                <option value="flip-left">Flip Left</option>
                                <option value="flip-right">Flip Right</option>
                            </optgroup>
                            <optgroup label="Slide">
                                <option value="slide-up">Slide Up</option>
                                <option value="slide-down">Slide Down</option>
                                <option value="slide-left">Slide Left</option>
                                <option value="slide-right">Slide Right</option>
                            </optgroup>
                        </Select>
                    </Cell>
                    <Cell span={12}>
                        <DurationInput
                            className={"no-bottom-padding"}
                            label={"Duration"}
                            icon={<TimerIcon />}
                            valueKey={DATA_NAMESPACE + ".duration"}
                            updateValue={getUpdateValue("duration")}
                            updatePreview={getUpdatePreview("duration")}
                        />
                    </Cell>
                    <Cell span={12}>
                        <Input
                            className={classNames("no-bottom-padding", classes.inputWrapper)}
                            placeholder={"ms"}
                            label={"Delay"}
                            valueKey={DATA_NAMESPACE + ".delay"}
                            updateValue={getUpdateValue("delay")}
                        />
                    </Cell>
                    <Cell span={12}>
                        <Input
                            className={classNames("no-bottom-padding", classes.inputWrapper)}
                            placeholder={"px"}
                            label={"offset"}
                            valueKey={DATA_NAMESPACE + ".offset"}
                            updateValue={getUpdateValue("offset")}
                        />
                    </Cell>
                    <Cell span={12}>
                        <Select
                            className={classes.animationEasingSelectWrapper}
                            label={"Easing"}
                            valueKey={DATA_NAMESPACE + ".easing"}
                            updateValue={getUpdateValue("easing")}
                        >
                            <option value="">Default</option>
                            <option value="linear">Linear</option>
                            <option value="ease">Ase</option>
                            <option value="ease-in">Ase in</option>
                            <option value="ease-out">Out</option>
                            <option value="ease-in-out">In out</option>
                            <option value="ease-in-back">In back</option>
                            <option value="ease-out-back">Out back</option>
                            <option value="ease-in-out-back">In out-back</option>
                            <option value="ease-in-sine">In sine</option>
                            <option value="ease-out-sine">Out sine</option>
                            <option value="ease-in-out-sine">In out-sine</option>
                            <option value="ease-in-quad">In quad</option>
                            <option value="ease-out-quad">Out quad</option>
                            <option value="ease-in-out-quad">In out-quad</option>
                            <option value="ease-in-cubic">In cubic</option>
                            <option value="ease-out-cubic">Out cubic</option>
                            <option value="ease-in-out-cubic">In out-cubic</option>
                            <option value="ease-in-quart">In quart</option>
                            <option value="ease-out-quart">Out quart</option>
                            <option value="ease-in-out-quart">In out-quart</option>
                        </Select>
                    </Cell>
                </Grid>
            </ContentWrapper>
        </AccordionItem>
    );
};
type AnimationSettingsPropsType = {
    title?: string;
    styleAttribute?: string;
};
const AnimationSettings: React.FunctionComponent<AnimationSettingsPropsType> = props => {
    return (
        <ElementAnimation>
            {animation => {
                return <Settings {...props} animation={animation} />;
            }}
        </ElementAnimation>
    );
};
export default AnimationSettings;