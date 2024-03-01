import React from "react";
import Input from "./Input.js";

export default {
    title: 'Input',
    component: Input
    
}
export const Large = () => <Input sizes='large' placeholder='Large size'/>
export const Medium = () => <Input sizes='medium' placeholder='Medium size' />
export const Small = () => <Input sizes='small'placeholder='Small size' />