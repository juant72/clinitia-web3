'use client'

import 'react-phone-number-input/style.css'
import PhoneInput, {type Value} from 'react-phone-number-input'
import React from 'react'

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import Image from 'next/image';
import { Input } from "@/components/ui/input";
import {Control} from "react-hook-form";
import { FormFieldType } from './forms/PatientForm';
  

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label? : string,
    placeHolder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat? : string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any)=>React.ReactNode,
} 

const RenderField=({field,props} : {field: any, props: CustomProps})=>{
    const {fieldType, iconSrc, iconAlt,placeHolder}=props;
    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className='flex rounded-md-border border-dark-500 bg-dark-400'>
                    {iconSrc && (
                        <Image 
                            src={iconSrc}
                            height={24}
                            width={24}
                            alt={ iconAlt || 'icon'}
                            className='ml-2'
                        />                        
                    )}
                    <FormControl>
                        <Input 
                            placeholder={placeHolder}
                            {...field}
                            className='shadow-input border-0'
                        />
                    </FormControl>
                </div>
            )
            break;
        case FormFieldType.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput
                        defaultCountry='US'
                        placeholder={placeHolder}
                        international
                        withCountryCallingCode
                        value={field.value as Value | undefined}
                        onChange={field.onChange}
                        className="input-phone shad-input border-0"
                    >
                    </PhoneInput>
                </FormControl>    
            )
            break;
    
        default:
            break;
    }
}

const CustomFormField = (props: CustomProps) => {
    const {control, fieldType, name,label }=props;
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <FormItem>
            {fieldType!==FormFieldType.CHECKBOX && label && (
                <FormLabel>{label}</FormLabel>
            )}
            <RenderField field={field} props={props}/>
            <FormMessage className='shad-error'/>
        </FormItem>
    )}
    />
  )
}

export default CustomFormField