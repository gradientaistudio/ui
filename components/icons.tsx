'use client';

import { useState, type FC, type ReactNode } from 'react';
import IconCopyButton from '@/components/icon-copy-button';

interface Icon {
  name: string;
  renderedicon: ReactNode;
  svg: string;
  jsx: string;
}

type IconsProps = {
  variant?: 'default' | 'preview' | 'single-column'
  reverse?: boolean
  query?: string
  showSearch?: boolean
}

const Icons: FC<IconsProps> = ({
  variant = 'default',
  reverse = false,
  query,
  showSearch = true,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [copiedType, setCopiedType] = useState<'svg' | 'jsx' | null>(null);
  const iconsArray: Icon[] = [
    {
      name: 'arrow-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12L12 19.5L19.5 12M12 19.5V4.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12L12 19.5L19.5 12M12 19.5V4.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12L12 19.5L19.5 12M12 19.5V4.5"/>
            </svg>`,
    },
    {
      name: 'arrow-down-long',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.48,15.69l6.52,6.52,6.52-6.52M12,22.21V1.79"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.48,15.69l6.52,6.52,6.52-6.52M12,22.21V1.79"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.48,15.69l6.52,6.52,6.52-6.52M12,22.21V1.79"/>
            </svg>`,
    },
    {
      name: 'arrow-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5L4.5 12L12 4.5M4.5 12H19.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5L4.5 12L12 4.5M4.5 12H19.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5L4.5 12L12 4.5M4.5 12H19.5"/>
            </svg>`,
    },
    {
      name: 'arrow-left-long',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.31,5.48L1.79,12l6.52,6.52M1.79,12h20.42"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.31,5.48L1.79,12l6.52,6.52M1.79,12h20.42"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.31,5.48L1.79,12l6.52,6.52M1.79,12h20.42"/>
            </svg>`,
    },
    {
      name: 'arrow-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5L19.5 12L12 19.5M19.5 12H4.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5L19.5 12L12 19.5M19.5 12H4.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5L19.5 12L12 19.5M19.5 12H4.5"/>
            </svg>`,
    },
    {
      name: 'arrow-right-long',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.69,18.52l6.52-6.52-6.52-6.52M22.21,12H1.79"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.69,18.52l6.52-6.52-6.52-6.52M22.21,12H1.79"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.69,18.52l6.52-6.52-6.52-6.52M22.21,12H1.79"/>
            </svg>`,
    },
    {
      name: 'arrow-up',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12L12 4.5L19.5 12M12 4.5V19.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12L12 4.5L19.5 12M12 4.5V19.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12L12 4.5L19.5 12M12 4.5V19.5"/>
            </svg>`,
    },
    {
      name: 'arrow-up-long',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.52,8.31L12,1.79l-6.52,6.52M12,1.79v20.42"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.52,8.31L12,1.79l-6.52,6.52M12,1.79v20.42"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.52,8.31L12,1.79l-6.52,6.52M12,1.79v20.42"/>
            </svg>`,
    },
    {
      name: 'arrow-chevron-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <polyline strokeLinecap="round" strokeLinejoin="round" points="19.5 8.25 12 15.75 4.5 8.25"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <polyline stroke-linecap="round" stroke-linejoin="round" points="19.5 8.25 12 15.75 4.5 8.25"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <polyline strokeLinecap="round" strokeLinejoin="round" points="19.5 8.25 12 15.75 4.5 8.25"/>
            </svg>`,
    },
    {
      name: 'arrow-chevron-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <polyline strokeLinecap="round" strokeLinejoin="round" points="15.75 19.5 8.25 12 15.75 4.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <polyline stroke-linecap="round" stroke-linejoin="round" points="15.75 19.5 8.25 12 15.75 4.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <polyline strokeLinecap="round" strokeLinejoin="round" points="15.75 19.5 8.25 12 15.75 4.5"/>
            </svg>`,
    },
    {
      name: 'arrow-chevron-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <polyline strokeLinecap="round" strokeLinejoin="round" points="8.25 4.5 15.75 12 8.25 19.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <polyline stroke-linecap="round" stroke-linejoin="round" points="8.25 4.5 15.75 12 8.25 19.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <polyline strokeLinecap="round" strokeLinejoin="round" points="8.25 4.5 15.75 12 8.25 19.5"/>
            </svg>`,
    },
    {
      name: 'arrow-chevron-up',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <polyline strokeLinecap="round" strokeLinejoin="round" points="4.5 15.75 12 8.25 19.5 15.75"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <polyline stroke-linecap="round" stroke-linejoin="round" points="4.5 15.75 12 8.25 19.5 15.75"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <polyline strokeLinecap="round" strokeLinejoin="round" points="4.5 15.75 12 8.25 19.5 15.75"/>
            </svg>`,
    },
    {
      name: 'arrow-cricle-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM15.58 12.48L12 16.06L8.42 12.48M12 16.06V7.94"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM15.58 12.48L12 16.06L8.42 12.48M12 16.06V7.94"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM15.58 12.48L12 16.06L8.42 12.48M12 16.06V7.94"/>
            </svg>`,
    },
    {
      name: 'arrow-cricle-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12,21c-4.97,0-9-4.03-9-9S7.03,3,12,3s9,4.03,9,9-4.03,9-9,9ZM11.52,15.58l-3.58-3.58,3.58-3.58M7.94,12h8.12"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12,21c-4.97,0-9-4.03-9-9S7.03,3,12,3s9,4.03,9,9-4.03,9-9,9ZM11.52,15.58l-3.58-3.58,3.58-3.58M7.94,12h8.12"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12,21c-4.97,0-9-4.03-9-9S7.03,3,12,3s9,4.03,9,9-4.03,9-9,9ZM11.52,15.58l-3.58-3.58,3.58-3.58M7.94,12h8.12"/>
            </svg>`,
    },
    {
      name: 'arrow-cricle-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12,3c4.97,0,9,4.03,9,9s-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3ZM12.48,8.42l3.58,3.58-3.58,3.58M16.06,12H7.94"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12,3c4.97,0,9,4.03,9,9s-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3ZM12.48,8.42l3.58,3.58-3.58,3.58M16.06,12H7.94"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12,3c4.97,0,9,4.03,9,9s-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3ZM12.48,8.42l3.58,3.58-3.58,3.58M16.06,12H7.94"/>
            </svg>`,
    },
    {
      name: 'arrow-cricle-up',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3,12c0-4.97,4.03-9,9-9s9,4.03,9,9c0,4.97-4.03,9-9,9S3,16.97,3,12ZM8.42,11.52l3.58-3.58,3.58,3.58M12,7.94v8.12"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3,12c0-4.97,4.03-9,9-9s9,4.03,9,9c0,4.97-4.03,9-9,9S3,16.97,3,12ZM8.42,11.52l3.58-3.58,3.58,3.58M12,7.94v8.12"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3,12c0-4.97,4.03-9,9-9s9,4.03,9,9c0,4.97-4.03,9-9,9S3,16.97,3,12ZM8.42,11.52l3.58-3.58,3.58,3.58M12,7.94v8.12"/>
            </svg>`,
    },
    {
      name: 'arrow-down-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.3,17.3H6.69s0-10.61,0-10.61M6.7,17.31l10.61-10.61"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.3,17.3H6.69s0-10.61,0-10.61M6.7,17.31l10.61-10.61"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.3,17.3H6.69s0-10.61,0-10.61M6.7,17.31l10.61-10.61"/>
            </svg>`,
    },
    {
      name: 'arrow-down-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.3,6.7v10.61s-10.61,0-10.61,0M17.3,17.3L6.69,6.69"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.3,6.7v10.61s-10.61,0-10.61,0M17.3,17.3L6.69,6.69"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.3,6.7v10.61s-10.61,0-10.61,0M17.3,17.3L6.69,6.69"/>
            </svg>`,
    },
    {
      name: 'arrow-up-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.7,17.3V6.69s10.61,0,10.61,0M6.69,6.7l10.61,10.61"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.7,17.3V6.69s10.61,0,10.61,0M6.69,6.7l10.61,10.61"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.7,17.3V6.69s10.61,0,10.61,0M6.69,6.7l10.61,10.61"/>
            </svg>`,
    },
    {
      name: 'arrow-up-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.7,6.7h10.61s0,10.61,0,10.61M17.3,6.7l-10.61,10.61"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.7,6.7h10.61s0,10.61,0,10.61M17.3,6.7l-10.61,10.61"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.7,6.7h10.61s0,10.61,0,10.61M17.3,6.7l-10.61,10.61"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-down-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.21 20.21L3.75 15.75L8.21 11.29M3.75 15.75H20.25V4.24"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.21 20.21L3.75 15.75L8.21 11.29M3.75 15.75H20.25V4.24"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.21 20.21L3.75 15.75L8.21 11.29M3.75 15.75H20.25V4.24"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-down-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.79,11.07l4.46,4.46-4.46,4.46M3.75,4.02v11.51s16.5,0,16.5,0"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.79,11.07l4.46,4.46-4.46,4.46M3.75,4.02v11.51s16.5,0,16.5,0"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.79,11.07l4.46,4.46-4.46,4.46M3.75,4.02v11.51s16.5,0,16.5,0"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.17,14.83l-5.67-5.67M3.5,9.17l5.67-5.67M3.5,9.17h11.33c3.13,0,5.67,2.54,5.67,5.67s-2.54,5.67-5.67,5.67h-2.83"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.17,14.83l-5.67-5.67M3.5,9.17l5.67-5.67M3.5,9.17h11.33c3.13,0,5.67,2.54,5.67,5.67s-2.54,5.67-5.67,5.67h-2.83"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.17,14.83l-5.67-5.67M3.5,9.17l5.67-5.67M3.5,9.17h11.33c3.13,0,5.67,2.54,5.67,5.67s-2.54,5.67-5.67,5.67h-2.83"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-left-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.94,15.79l-4.46,4.46-4.46-4.46M19.99,3.75h-11.51v16.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.94,15.79l-4.46,4.46-4.46-4.46M19.99,3.75h-11.51v16.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.94,15.79l-4.46,4.46-4.46-4.46M19.99,3.75h-11.51v16.5"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-left-up',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.02,8.21l4.46-4.46,4.46,4.46M8.48,3.75v16.5s11.51,0,11.51,0"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.02,8.21l4.46-4.46,4.46,4.46M8.48,3.75v16.5s11.51,0,11.51,0"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.02,8.21l4.46-4.46,4.46,4.46M8.48,3.75v16.5s11.51,0,11.51,0"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.83,14.83l5.67-5.67M20.5,9.17l-5.67-5.67M20.5,9.17h-11.33c-3.13,0-5.67,2.54-5.67,5.67s2.54,5.67,5.67,5.67h2.83"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.83,14.83l5.67-5.67M20.5,9.17l-5.67-5.67M20.5,9.17h-11.33c-3.13,0-5.67,2.54-5.67,5.67s2.54,5.67,5.67,5.67h2.83"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.83,14.83l5.67-5.67M20.5,9.17l-5.67-5.67M20.5,9.17h-11.33c-3.13,0-5.67,2.54-5.67,5.67s2.54,5.67,5.67,5.67h2.83"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-right-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.99,15.79l-4.46,4.46-4.46-4.46M15.53,20.25V3.75s-11.51,0-11.51,0"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.99,15.79l-4.46,4.46-4.46-4.46M15.53,20.25V3.75s-11.51,0-11.51,0"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.99,15.79l-4.46,4.46-4.46-4.46M15.53,20.25V3.75s-11.51,0-11.51,0"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-right-up',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.07,8.21l4.46-4.46,4.46,4.46M4.02,20.25h11.51V3.75"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.07,8.21l4.46-4.46,4.46,4.46M4.02,20.25h11.51V3.75"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.07,8.21l4.46-4.46,4.46,4.46M4.02,20.25h11.51V3.75"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-up-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.21,12.94l-4.46-4.46,4.46-4.46M20.25,19.98v-11.51s-16.5,0-16.5,0"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.21,12.94l-4.46-4.46,4.46-4.46M20.25,19.98v-11.51s-16.5,0-16.5,0"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.21,12.94l-4.46-4.46,4.46-4.46M20.25,19.98v-11.51s-16.5,0-16.5,0"/>
            </svg>`,
    },
    {
      name: 'arrow-turn-up-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.79,4.02l4.46,4.46-4.46,4.46M20.25,8.48H3.75s0,11.51,0,11.51"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.79,4.02l4.46,4.46-4.46,4.46M20.25,8.48H3.75s0,11.51,0,11.51"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.79,4.02l4.46,4.46-4.46,4.46M20.25,8.48H3.75s0,11.51,0,11.51"/>
            </svg>`,
    },
    {
      name: 'arrows-right-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.38,3l4.5,4.5M19.88,7.5l-4.5,4.5M19.88,7.5H6.38M8.62,21l-4.5-4.5M4.12,16.5l4.5-4.5M4.12,16.5h13.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.38,3l4.5,4.5M19.88,7.5l-4.5,4.5M19.88,7.5H6.38M8.62,21l-4.5-4.5M4.12,16.5l4.5-4.5M4.12,16.5h13.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.38,3l4.5,4.5M19.88,7.5l-4.5,4.5M19.88,7.5H6.38M8.62,21l-4.5-4.5M4.12,16.5l4.5-4.5M4.12,16.5h13.5"/>
            </svg>`,
    },
    {
      name: 'arrows-up-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3,8.62l4.5-4.5M7.5,4.12l4.5,4.5M7.5,4.12v13.5M21,15.38l-4.5,4.5M16.5,19.88l-4.5-4.5M16.5,19.88V6.38"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3,8.62l4.5-4.5M7.5,4.12l4.5,4.5M7.5,4.12v13.5M21,15.38l-4.5,4.5M16.5,19.88l-4.5-4.5M16.5,19.88V6.38"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3,8.62l4.5-4.5M7.5,4.12l4.5,4.5M7.5,4.12v13.5M21,15.38l-4.5,4.5M16.5,19.88l-4.5-4.5M16.5,19.88V6.38"/>
            </svg>`,
    },
    {
      name: 'backspace',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.41,9.5l2.5,2.5M13.91,12l2.5,2.5M13.91,12l2.5-2.5M13.91,12l-2.5,2.5M9.34,18.78l-6.03-6.03c-.41-.42-.41-1.09,0-1.5l6.03-6.03c.2-.2.47-.31.75-.31h8.78c1.18,0,2.13.95,2.13,2.13v9.93c0,1.18-.95,2.13-2.13,2.13h-8.78c-.28,0-.55-.11-.75-.31h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.41,9.5l2.5,2.5M13.91,12l2.5,2.5M13.91,12l2.5-2.5M13.91,12l-2.5,2.5M9.34,18.78l-6.03-6.03c-.41-.42-.41-1.09,0-1.5l6.03-6.03c.2-.2.47-.31.75-.31h8.78c1.18,0,2.13.95,2.13,2.13v9.93c0,1.18-.95,2.13-2.13,2.13h-8.78c-.28,0-.55-.11-.75-.31h0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.41,9.5l2.5,2.5M13.91,12l2.5,2.5M13.91,12l2.5-2.5M13.91,12l-2.5,2.5M9.34,18.78l-6.03-6.03c-.41-.42-.41-1.09,0-1.5l6.03-6.03c.2-.2.47-.31.75-.31h8.78c1.18,0,2.13.95,2.13,2.13v9.93c0,1.18-.95,2.13-2.13,2.13h-8.78c-.28,0-.55-.11-.75-.31h0Z"/>
            </svg>`,
    },
    {
      name: 'backward',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21,15.82c0,.81-.88,1.32-1.59.92l-6.7-3.83c-.51-.29-.69-.94-.39-1.45.09-.16.23-.3.39-.39l6.7-3.83c.51-.29,1.16-.11,1.45.39.09.16.14.34.14.53v7.65ZM11.82,15.82c0,.81-.88,1.32-1.59.92l-6.7-3.83c-.51-.29-.69-.94-.39-1.45.09-.16.23-.3.39-.39l6.7-3.83c.51-.29,1.16-.11,1.45.39.09.16.14.34.14.53v7.65Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21,15.82c0,.81-.88,1.32-1.59.92l-6.7-3.83c-.51-.29-.69-.94-.39-1.45.09-.16.23-.3.39-.39l6.7-3.83c.51-.29,1.16-.11,1.45.39.09.16.14.34.14.53v7.65ZM11.82,15.82c0,.81-.88,1.32-1.59.92l-6.7-3.83c-.51-.29-.69-.94-.39-1.45.09-.16.23-.3.39-.39l6.7-3.83c.51-.29,1.16-.11,1.45.39.09.16.14.34.14.53v7.65Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21,15.82c0,.81-.88,1.32-1.59.92l-6.7-3.83c-.51-.29-.69-.94-.39-1.45.09-.16.23-.3.39-.39l6.7-3.83c.51-.29,1.16-.11,1.45.39.09.16.14.34.14.53v7.65ZM11.82,15.82c0,.81-.88,1.32-1.59.92l-6.7-3.83c-.51-.29-.69-.94-.39-1.45.09-.16.23-.3.39-.39l6.7-3.83c.51-.29,1.16-.11,1.45.39.09.16.14.34.14.53v7.65Z"/>
            </svg>`,
    },
    {
      name: 'bank',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12,20.75v-8.02M15.65,20.75v-8.02M8.35,20.75v-8.02M3.25,9.08L12,3.25l8.75,5.83M19.29,20.75v-10.37H4.71v10.37M3.25,20.75h17.5M12,6.9h0s0,0,0,0h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12,20.75v-8.02M15.65,20.75v-8.02M8.35,20.75v-8.02M3.25,9.08L12,3.25l8.75,5.83M19.29,20.75v-10.37H4.71v10.37M3.25,20.75h17.5M12,6.9h0s0,0,0,0h0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12,20.75v-8.02M15.65,20.75v-8.02M8.35,20.75v-8.02M3.25,9.08L12,3.25l8.75,5.83M19.29,20.75v-10.37H4.71v10.37M3.25,20.75h17.5M12,6.9h0s0,0,0,0h0Z"/>
            </svg>`,
    },
    {
      name: 'bars-2',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M 3.75 8.24 L 20.25 8.24 M 3.75 15.76 L 20.25 15.76"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M 3.75 8.24 L 20.25 8.24 M 3.75 15.76 L 20.25 15.76"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M 3.75 8.24 L 20.25 8.24 M 3.75 15.76 L 20.25 15.76"/>
            </svg>`,
    },
    {
      name: 'bars-2-bottom-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,8.24h16.5M3.75,15.76h11.02"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75,8.24h16.5M3.75,15.76h11.02"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,8.24h16.5M3.75,15.76h11.02"/>
            </svg>`,
    },
    {
      name: 'bars-2-bottom-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,8.24h16.5M9.23,15.76h11.02"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75,8.24h16.5M9.23,15.76h11.02"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,8.24h16.5M9.23,15.76h11.02"/>
            </svg>`,
    },
    {
      name: 'bars-3',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M 3.75 6.25 L 20.25 6.25 M 3.75 12 L 20.25 12 M 3.75 17.75 L 20.25 17.75"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M 3.75 6.25 L 20.25 6.25 M 3.75 12 L 20.25 12 M 3.75 17.75 L 20.25 17.75"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M 3.75 6.25 L 20.25 6.25 M 3.75 12 L 20.25 12 M 3.75 17.75 L 20.25 17.75"/>
            </svg>`,
    },
    {
      name: 'bars-3-bottom-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,6.25h16.5M3.75,12h16.5M3.75,17.75h11.02"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75,6.25h16.5M3.75,12h16.5M3.75,17.75h11.02"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,6.25h16.5M3.75,12h16.5M3.75,17.75h11.02"/>
            </svg>`,
    },
    {
      name: 'bars-3-bottom-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,6.25h16.5M3.75,12h16.5M9.23,17.75h11.02"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75,6.25h16.5M3.75,12h16.5M9.23,17.75h11.02"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,6.25h16.5M3.75,12h16.5M9.23,17.75h11.02"/>
            </svg>`,
    },
    {
      name: 'bars-4',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,5.21h16.5M3.75,9.74h16.5M3.75,14.26h16.5M3.75,18.79h16.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75,5.21h16.5M3.75,9.74h16.5M3.75,14.26h16.5M3.75,18.79h16.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75,5.21h16.5M3.75,9.74h16.5M3.75,14.26h16.5M3.75,18.79h16.5"/>
            </svg>`,
    },
    {
      name: 'battery-0',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.71,10.07h.32c.53,0,.96.43.96.96v1.93c0,.53-.43.96-.96.96h-.32M4.93,16.5h12.86c1.07,0,1.93-.86,1.93-1.93v-5.14c0-1.07-.86-1.93-1.93-1.93H4.93c-1.07,0-1.93.86-1.93,1.93v5.14c0,1.07.86,1.93,1.93,1.93Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.71,10.07h.32c.53,0,.96.43.96.96v1.93c0,.53-.43.96-.96.96h-.32M4.93,16.5h12.86c1.07,0,1.93-.86,1.93-1.93v-5.14c0-1.07-.86-1.93-1.93-1.93H4.93c-1.07,0-1.93.86-1.93,1.93v5.14c0,1.07.86,1.93,1.93,1.93Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.71,10.07h.32c.53,0,.96.43.96.96v1.93c0,.53-.43.96-.96.96h-.32M4.93,16.5h12.86c1.07,0,1.93-.86,1.93-1.93v-5.14c0-1.07-.86-1.93-1.93-1.93H4.93c-1.07,0-1.93.86-1.93,1.93v5.14c0,1.07.86,1.93,1.93,1.93Z"/>
            </svg>`,
    },
    {
      name: 'battery-100',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.71,10.07h.32c.53,0,.96.43.96.96v1.93c0,.53-.43.96-.96.96h-.32M5.57,10.07h11.57v3.86H5.57v-3.86ZM4.93,16.5h12.86c1.07,0,1.93-.86,1.93-1.93v-5.14c0-1.07-.86-1.93-1.93-1.93H4.93c-1.07,0-1.93.86-1.93,1.93v5.14c0,1.07.86,1.93,1.93,1.93Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.71,10.07h.32c.53,0,.96.43.96.96v1.93c0,.53-.43.96-.96.96h-.32M5.57,10.07h11.57v3.86H5.57v-3.86ZM4.93,16.5h12.86c1.07,0,1.93-.86,1.93-1.93v-5.14c0-1.07-.86-1.93-1.93-1.93H4.93c-1.07,0-1.93.86-1.93,1.93v5.14c0,1.07.86,1.93,1.93,1.93Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.71,10.07h.32c.53,0,.96.43.96.96v1.93c0,.53-.43.96-.96.96h-.32M5.57,10.07h11.57v3.86H5.57v-3.86ZM4.93,16.5h12.86c1.07,0,1.93-.86,1.93-1.93v-5.14c0-1.07-.86-1.93-1.93-1.93H4.93c-1.07,0-1.93.86-1.93,1.93v5.14c0,1.07.86,1.93,1.93,1.93Z"/>
            </svg>`,
    },
    {
      name: 'battery-50',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.71,10.07h.32c.53,0,.96.43.96.96v1.93c0,.53-.43.96-.96.96h-.32M5.57,10.07h5.79v3.86h-5.79v-3.86ZM4.93,16.5h12.86c1.07,0,1.93-.86,1.93-1.93v-5.14c0-1.07-.86-1.93-1.93-1.93H4.93c-1.07,0-1.93.86-1.93,1.93v5.14c0,1.07.86,1.93,1.93,1.93Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.71,10.07h.32c.53,0,.96.43.96.96v1.93c0,.53-.43.96-.96.96h-.32M5.57,10.07h5.79v3.86h-5.79v-3.86ZM4.93,16.5h12.86c1.07,0,1.93-.86,1.93-1.93v-5.14c0-1.07-.86-1.93-1.93-1.93H4.93c-1.07,0-1.93.86-1.93,1.93v5.14c0,1.07.86,1.93,1.93,1.93Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.71,10.07h.32c.53,0,.96.43.96.96v1.93c0,.53-.43.96-.96.96h-.32M5.57,10.07h5.79v3.86h-5.79v-3.86ZM4.93,16.5h12.86c1.07,0,1.93-.86,1.93-1.93v-5.14c0-1.07-.86-1.93-1.93-1.93H4.93c-1.07,0-1.93.86-1.93,1.93v5.14c0,1.07.86,1.93,1.93,1.93Z"/>
            </svg>`,
    },
    {
      name: 'block',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.36,18.36c3.51-3.51,3.51-9.21,0-12.73-3.51-3.51-9.21-3.51-12.73,0M18.36,18.36c-3.51,3.51-9.21,3.51-12.73,0-3.51-3.51-3.51-9.21,0-12.73M18.36,18.36L5.64,5.64"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.36,18.36c3.51-3.51,3.51-9.21,0-12.73-3.51-3.51-9.21-3.51-12.73,0M18.36,18.36c-3.51,3.51-9.21,3.51-12.73,0-3.51-3.51-3.51-9.21,0-12.73M18.36,18.36L5.64,5.64"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.36,18.36c3.51-3.51,3.51-9.21,0-12.73-3.51-3.51-9.21-3.51-12.73,0M18.36,18.36c-3.51,3.51-9.21,3.51-12.73,0-3.51-3.51-3.51-9.21,0-12.73M18.36,18.36L5.64,5.64"/>
            </svg>`,
    },
    {
      name: 'bolt',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.23,10.4h-4.87c-.27,0-.47-.26-.39-.52l1.97-6.84c.11-.39-.36-.69-.66-.41L5.03,11.93c-.28.25-.1.71.27.71h4.87c.27,0,.47.26.39.52l-1.97,6.84c-.11.39.36.69.66.41l10.25-9.31c.28-.25.1-.71-.27-.71Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.23,10.4h-4.87c-.27,0-.47-.26-.39-.52l1.97-6.84c.11-.39-.36-.69-.66-.41L5.03,11.93c-.28.25-.1.71.27.71h4.87c.27,0,.47.26.39.52l-1.97,6.84c-.11.39.36.69.66.41l10.25-9.31c.28-.25.1-.71-.27-.71Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.23,10.4h-4.87c-.27,0-.47-.26-.39-.52l1.97-6.84c.11-.39-.36-.69-.66-.41L5.03,11.93c-.28.25-.1.71.27.71h4.87c.27,0,.47.26.39.52l-1.97,6.84c-.11.39.36.69.66.41l10.25-9.31c.28-.25.1-.71-.27-.71Z"/>
            </svg>`,
    },
    {
      name: 'book',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12,7.37c-1.65-1.14-3.79-1.78-6-1.77-1.05,0-2.06.14-3,.4v11.02c.96-.26,1.98-.4,3-.4,2.31,0,4.41.67,6,1.77M12,7.37c1.65-1.14,3.79-1.78,6-1.77,1.05,0,2.06.14,3,.4v11.02c-.96-.26-1.98-.4-3-.4-2.21,0-4.35.63-6,1.77M12,7.37v11.02"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12,7.37c-1.65-1.14-3.79-1.78-6-1.77-1.05,0-2.06.14-3,.4v11.02c.96-.26,1.98-.4,3-.4,2.31,0,4.41.67,6,1.77M12,7.37c1.65-1.14,3.79-1.78,6-1.77,1.05,0,2.06.14,3,.4v11.02c-.96-.26-1.98-.4-3-.4-2.21,0-4.35.63-6,1.77M12,7.37v11.02"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12,7.37c-1.65-1.14-3.79-1.78-6-1.77-1.05,0-2.06.14-3,.4v11.02c.96-.26,1.98-.4,3-.4,2.31,0,4.41.67,6,1.77M12,7.37c1.65-1.14,3.79-1.78,6-1.77,1.05,0,2.06.14,3,.4v11.02c-.96-.26-1.98-.4-3-.4-2.21,0-4.35.63-6,1.77M12,7.37v11.02"/>
            </svg>`,
    },
    {
      name: 'book-mark',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.49,3.37c1.66.15,3.01,1.66,3.01,3.33v13.61c0,.39-.41.65-.76.47l-6.27-3.13c-.3-.15-.65-.15-.94,0l-6.27,3.13c-.35.18-.76-.08-.76-.47V6.7c0-1.66,1.35-3.17,3.01-3.33,2.99-.28,5.99-.28,8.98,0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.49,3.37c1.66.15,3.01,1.66,3.01,3.33v13.61c0,.39-.41.65-.76.47l-6.27-3.13c-.3-.15-.65-.15-.94,0l-6.27,3.13c-.35.18-.76-.08-.76-.47V6.7c0-1.66,1.35-3.17,3.01-3.33,2.99-.28,5.99-.28,8.98,0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.49,3.37c1.66.15,3.01,1.66,3.01,3.33v13.61c0,.39-.41.65-.76.47l-6.27-3.13c-.3-.15-.65-.15-.94,0l-6.27,3.13c-.35.18-.76-.08-.76-.47V6.7c0-1.66,1.35-3.17,3.01-3.33,2.99-.28,5.99-.28,8.98,0Z"/>
            </svg>`,
    },
    {
      name: 'book-mark-2',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5,4.1v15.28c0,.39-.41.65-.76.47l-6.27-3.13c-.3-.15-.65-.15-.94,0l-6.27,3.13c-.35.18-.76-.08-.76-.47V4.1s15,0,15,0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5,4.1v15.28c0,.39-.41.65-.76.47l-6.27-3.13c-.3-.15-.65-.15-.94,0l-6.27,3.13c-.35.18-.76-.08-.76-.47V4.1s15,0,15,0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5,4.1v15.28c0,.39-.41.65-.76.47l-6.27-3.13c-.3-.15-.65-.15-.94,0l-6.27,3.13c-.35.18-.76-.08-.76-.47V4.1s15,0,15,0Z"/>
            </svg>`,
    },
    {
      name: 'briefcase',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <rect x="3" y="7.33" width="18" height="12.29" rx="1.64" ry="1.64" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.12,4.38h3.75c.61,0,1.1.49,1.1,1.1v1.86h-5.95v-1.86c0-.61.49-1.1,1.1-1.1Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <rect x="3" y="7.33" width="18" height="12.29" rx="1.64" ry="1.64" stroke-linecap="round" stroke-linejoin="round"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.12,4.38h3.75c.61,0,1.1.49,1.1,1.1v1.86h-5.95v-1.86c0-.61.49-1.1,1.1-1.1Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <rect x="3" y="7.33" width="18" height="12.29" rx="1.64" ry="1.64" strokeLinecap="round" strokeLinejoin="round" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.12,4.38h3.75c.61,0,1.1.49,1.1,1.1v1.86h-5.95v-1.86c0-.61.49-1.1,1.1-1.1Z"/>
            </svg>`,
    },
    {
      name: 'browser',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3,8.25v9.75c0,1.24,1.01,2.25,2.25,2.25h13.5c1.24,0,2.25-1.01,2.25-2.25v-9.75M3,8.25v-2.25c0-1.24,1.01-2.25,2.25-2.25h13.5c1.24,0,2.25,1.01,2.25,2.25v2.25M3,8.25h18M5.25,6h0.01M7.5,6h0.01M9.75,6h0.01"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3,8.25v9.75c0,1.24,1.01,2.25,2.25,2.25h13.5c1.24,0,2.25-1.01,2.25-2.25v-9.75M3,8.25v-2.25c0-1.24,1.01-2.25,2.25-2.25h13.5c1.24,0,2.25,1.01,2.25,2.25v2.25M3,8.25h18M5.25,6h0.01M7.5,6h0.01M9.75,6h0.01"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3,8.25v9.75c0,1.24,1.01,2.25,2.25,2.25h13.5c1.24,0,2.25-1.01,2.25-2.25v-9.75M3,8.25v-2.25c0-1.24,1.01-2.25,2.25-2.25h13.5c1.24,0,2.25,1.01,2.25,2.25v2.25M3,8.25h18M5.25,6h0.01M7.5,6h0.01M9.75,6h0.01"/>
            </svg>`,
    },
    {
      name: 'calculator',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <rect x="4.5" y="2.64" width="15" height="18.73" rx="2.94" ry="2.94" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="9.49" y="10.97" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="9.49" y="13.22" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="9.49" y="15.47" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="9.49" y="17.72" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="11.99" y="10.97" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="11.99" y="13.22" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="11.99" y="15.47" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="14.49" y="15.47" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="11.99" y="17.72" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="14.49" y="17.72" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="14.49" y="10.97" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="14.49" y="13.22" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="8.24" y="5.72" width="7.5" height="2.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <rect x="4.5" y="2.64" width="15" height="18.73" rx="2.94" ry="2.94" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="9.49" y="10.97" width="0" height="0" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="9.49" y="13.22" width="0" height="0" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="9.49" y="15.47" width="0" height="0" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="9.49" y="17.72" width="0" height="0" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="11.99" y="10.97" width="0" height="0" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="11.99" y="13.22" width="0" height="0" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="11.99" y="15.47" width="0" height="0" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="14.49" y="15.47" width="0" height="0" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="11.99" y="17.72" width="0" height="0" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="14.49" y="17.72" width="0" height="0" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="14.49" y="10.97" width="0" height="0" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="14.49" y="13.22" width="0" height="0" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="8.24" y="5.72" width="7.5" height="2.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <rect x="4.5" y="2.64" width="15" height="18.73" rx="2.94" ry="2.94" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="9.49" y="10.97" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="9.49" y="13.22" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="9.49" y="15.47" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="9.49" y="17.72" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="11.99" y="10.97" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="11.99" y="13.22" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="11.99" y="15.47" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="14.49" y="15.47" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="11.99" y="17.72" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="14.49" y="17.72" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="14.49" y="10.97" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="14.49" y="13.22" width="0" height="0" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="8.24" y="5.72" width="7.5" height="2.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>`,
    },
    {
      name: 'calendar',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.29,3.25v2.19M16.71,3.25v2.19M3.25,18.56V7.62c0-1.21.98-2.19,2.19-2.19h13.12c1.21,0,2.19.98,2.19,2.19v10.94M3.25,18.56c0,1.21.98,2.19,2.19,2.19h13.12c1.21,0,2.19-.98,2.19-2.19M3.25,18.92v-7.29c0-1.21.98-2.19,2.19-2.19h13.12c1.21,0,2.19.98,2.19,2.19v7.29"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.29,3.25v2.19M16.71,3.25v2.19M3.25,18.56V7.62c0-1.21.98-2.19,2.19-2.19h13.12c1.21,0,2.19.98,2.19,2.19v10.94M3.25,18.56c0,1.21.98,2.19,2.19,2.19h13.12c1.21,0,2.19-.98,2.19-2.19M3.25,18.92v-7.29c0-1.21.98-2.19,2.19-2.19h13.12c1.21,0,2.19.98,2.19,2.19v7.29"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.29,3.25v2.19M16.71,3.25v2.19M3.25,18.56V7.62c0-1.21.98-2.19,2.19-2.19h13.12c1.21,0,2.19.98,2.19,2.19v10.94M3.25,18.56c0,1.21.98,2.19,2.19,2.19h13.12c1.21,0,2.19-.98,2.19-2.19M3.25,18.92v-7.29c0-1.21.98-2.19,2.19-2.19h13.12c1.21,0,2.19.98,2.19,2.19v7.29"/>
            </svg>`,
    },
    {
      name: 'camera',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.22,6.96c-.34.53-.89.89-1.51.97-.35.05-.7.1-1.05.16-.97.16-1.66,1.02-1.66,2v7.1c0,1.15.93,2.08,2.08,2.08h13.85c1.15,0,2.08-.93,2.08-2.08v-7.1c0-.98-.69-1.84-1.66-2-.35-.06-.7-.11-1.05-.16-.62-.09-1.18-.44-1.51-.97l-.76-1.21c-.35-.56-.94-.92-1.6-.96-1.61-.09-3.22-.09-4.83,0-.66.04-1.26.4-1.6.96,0,0-.76,1.21-.76,1.21Z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.15,12.35c0,2.29-1.86,4.15-4.15,4.15s-4.15-1.86-4.15-4.15,1.86-4.15,4.15-4.15,4.15,1.86,4.15,4.15ZM18.73,10.28h0s0,0,0,0h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.22,6.96c-.34.53-.89.89-1.51.97-.35.05-.7.1-1.05.16-.97.16-1.66,1.02-1.66,2v7.1c0,1.15.93,2.08,2.08,2.08h13.85c1.15,0,2.08-.93,2.08-2.08v-7.1c0-.98-.69-1.84-1.66-2-.35-.06-.7-.11-1.05-.16-.62-.09-1.18-.44-1.51-.97l-.76-1.21c-.35-.56-.94-.92-1.6-.96-1.61-.09-3.22-.09-4.83,0-.66.04-1.26.4-1.6.96,0,0-.76,1.21-.76,1.21Z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.15,12.35c0,2.29-1.86,4.15-4.15,4.15s-4.15-1.86-4.15-4.15,1.86-4.15,4.15-4.15,4.15,1.86,4.15,4.15ZM18.73,10.28h0s0,0,0,0h0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.22,6.96c-.34.53-.89.89-1.51.97-.35.05-.7.1-1.05.16-.97.16-1.66,1.02-1.66,2v7.1c0,1.15.93,2.08,2.08,2.08h13.85c1.15,0,2.08-.93,2.08-2.08v-7.1c0-.98-.69-1.84-1.66-2-.35-.06-.7-.11-1.05-.16-.62-.09-1.18-.44-1.51-.97l-.76-1.21c-.35-.56-.94-.92-1.6-.96-1.61-.09-3.22-.09-4.83,0-.66.04-1.26.4-1.6.96,0,0-.76,1.21-.76,1.21Z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.15,12.35c0,2.29-1.86,4.15-4.15,4.15s-4.15-1.86-4.15-4.15,1.86-4.15,4.15-4.15,4.15,1.86,4.15,4.15ZM18.73,10.28h0s0,0,0,0h0Z"/>
            </svg>`,
    },
    {
      name: 'caution-circle',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12,8.63v4.71M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9ZM12,15.75h0s0,0,0,0h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12,8.63v4.71M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9ZM12,15.75h0s0,0,0,0h0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12,8.63v4.71M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9ZM12,15.75h0s0,0,0,0h0Z"/>
            </svg>`,
    },
    {
      name: 'caution-triangle',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.8,17.19c-.86,1.48.21,3.34,1.93,3.34h14.55c1.71,0,2.78-1.85,1.93-3.34l-7.27-12.61c-.86-1.48-3-1.48-3.85,0,0,0-7.27,12.61-7.27,12.61Z"/>
          <line x1="12" y1="9.66" x2="12" y2="14.01" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="12 16.34 12 16.34 12 16.35 12 16.35 12 16.34" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.8,17.19c-.86,1.48.21,3.34,1.93,3.34h14.55c1.71,0,2.78-1.85,1.93-3.34l-7.27-12.61c-.86-1.48-3-1.48-3.85,0,0,0-7.27,12.61-7.27,12.61Z"/>
              <line x1="12" y1="9.66" x2="12" y2="14.01" stroke-linecap="round" stroke-linejoin="round"/>
              <polyline points="12 16.34 12 16.34 12 16.35 12 16.35 12 16.34" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.8,17.19c-.86,1.48.21,3.34,1.93,3.34h14.55c1.71,0,2.78-1.85,1.93-3.34l-7.27-12.61c-.86-1.48-3-1.48-3.85,0,0,0-7.27,12.61-7.27,12.61Z"/>
              <line x1="12" y1="9.66" x2="12" y2="14.01" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="12 16.34 12 16.34 12 16.35 12 16.35 12 16.34" strokeLinecap="round" strokeLinejoin="round" />
            </svg>`,
    },
    {
      name: 'char-pie',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.65,5.85c-4.14,0-7.5,3.36-7.5,7.5s3.36,7.5,7.5,7.5,7.5-3.36,7.5-7.5h-7.5v-7.5Z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.35,10.65h7.5c0-4.14-3.36-7.5-7.5-7.5v7.5Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.65,5.85c-4.14,0-7.5,3.36-7.5,7.5s3.36,7.5,7.5,7.5,7.5-3.36,7.5-7.5h-7.5v-7.5Z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.35,10.65h7.5c0-4.14-3.36-7.5-7.5-7.5v7.5Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.65,5.85c-4.14,0-7.5,3.36-7.5,7.5s3.36,7.5,7.5,7.5,7.5-3.36,7.5-7.5h-7.5v-7.5Z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.35,10.65h7.5c0-4.14-3.36-7.5-7.5-7.5v7.5Z"/>
            </svg>`,
    },
    {
      name: 'chart-bar',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.25,13.09c0-.6.49-1.09,1.09-1.09h2.19c.6,0,1.09.49,1.09,1.09v6.56c0,.6-.49,1.09-1.09,1.09h-2.19c-.6,0-1.09-.49-1.09-1.09h0v-6.56ZM9.81,8.72c0-.6.49-1.09,1.09-1.09h2.19c.6,0,1.09.49,1.09,1.09v10.94c0,.6-.49,1.09-1.09,1.09h-2.19c-.6,0-1.09-.49-1.09-1.09v-10.94ZM16.38,4.34c0-.6.49-1.09,1.09-1.09h2.19c.6,0,1.09.49,1.09,1.09v15.31c0,.6-.49,1.09-1.09,1.09h-2.19c-.6,0-1.09-.49-1.09-1.09V4.34Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.25,13.09c0-.6.49-1.09,1.09-1.09h2.19c.6,0,1.09.49,1.09,1.09v6.56c0,.6-.49,1.09-1.09,1.09h-2.19c-.6,0-1.09-.49-1.09-1.09h0v-6.56ZM9.81,8.72c0-.6.49-1.09,1.09-1.09h2.19c.6,0,1.09.49,1.09,1.09v10.94c0,.6-.49,1.09-1.09,1.09h-2.19c-.6,0-1.09-.49-1.09-1.09v-10.94ZM16.38,4.34c0-.6.49-1.09,1.09-1.09h2.19c.6,0,1.09.49,1.09,1.09v15.31c0,.6-.49,1.09-1.09,1.09h-2.19c-.6,0-1.09-.49-1.09-1.09V4.34Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.25,13.09c0-.6.49-1.09,1.09-1.09h2.19c.6,0,1.09.49,1.09,1.09v6.56c0,.6-.49,1.09-1.09,1.09h-2.19c-.6,0-1.09-.49-1.09-1.09h0v-6.56ZM9.81,8.72c0-.6.49-1.09,1.09-1.09h2.19c.6,0,1.09.49,1.09,1.09v10.94c0,.6-.49,1.09-1.09,1.09h-2.19c-.6,0-1.09-.49-1.09-1.09v-10.94ZM16.38,4.34c0-.6.49-1.09,1.09-1.09h2.19c.6,0,1.09.49,1.09,1.09v15.31c0,.6-.49,1.09-1.09,1.09h-2.19c-.6,0-1.09-.49-1.09-1.09V4.34Z"/>
            </svg>`,
    },
    {
      name: 'chart-bar-square',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6,20.25h12c1.24,0,2.25-1.01,2.25-2.25V6c0-1.24-1.01-2.25-2.25-2.25H6c-1.24,0-2.25,1.01-2.25,2.25v12c0,1.24,1.01,2.25,2.25,2.25Z"/>
          <line x1="8.28" y1="12" x2="8.28" y2="16.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="9.71" x2="12" y2="16.46" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="15.72" y1="7.5" x2="15.72" y2="16.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6,20.25h12c1.24,0,2.25-1.01,2.25-2.25V6c0-1.24-1.01-2.25-2.25-2.25H6c-1.24,0-2.25,1.01-2.25,2.25v12c0,1.24,1.01,2.25,2.25,2.25Z"/>
              <line x1="8.28" y1="12" x2="8.28" y2="16.5" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="12" y1="9.71" x2="12" y2="16.46" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="15.72" y1="7.5" x2="15.72" y2="16.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6,20.25h12c1.24,0,2.25-1.01,2.25-2.25V6c0-1.24-1.01-2.25-2.25-2.25H6c-1.24,0-2.25,1.01-2.25,2.25v12c0,1.24,1.01,2.25,2.25,2.25Z"/>
              <line x1="8.28" y1="12" x2="8.28" y2="16.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="9.71" x2="12" y2="16.46" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="15.72" y1="7.5" x2="15.72" y2="16.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>`,
    },
    {
      name: 'chat',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12,3.37c4.97,0,9,3.69,9,8.25,0,2.19-.93,4.18-2.45,5.65-.33.33-.56.77-.47,1.23.15.75.49,1.44.98,2.02-.16.03-.32.05-.47.07-1.43.14-2.86-.23-4.03-1.06-.83.22-1.69.34-2.56.34-4.97,0-9-3.69-9-8.25S7.03,3.37,12,3.37Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12,3.37c4.97,0,9,3.69,9,8.25,0,2.19-.93,4.18-2.45,5.65-.33.33-.56.77-.47,1.23.15.75.49,1.44.98,2.02-.16.03-.32.05-.47.07-1.43.14-2.86-.23-4.03-1.06-.83.22-1.69.34-2.56.34-4.97,0-9-3.69-9-8.25S7.03,3.37,12,3.37Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12,3.37c4.97,0,9,3.69,9,8.25,0,2.19-.93,4.18-2.45,5.65-.33.33-.56.77-.47,1.23.15.75.49,1.44.98,2.02-.16.03-.32.05-.47.07-1.43.14-2.86-.23-4.03-1.06-.83.22-1.69.34-2.56.34-4.97,0-9-3.69-9-8.25S7.03,3.37,12,3.37Z"/>
            </svg>`,
    },
    {
      name: 'chat-typing',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75,11.25c.21,0,.37.17.37.38,0,.21-.17.37-.38.37s-.37-.17-.37-.38c0-.21.17-.37.38-.37ZM15.75,11.62h-.38M12,11.25c.21,0,.37.17.37.38,0,.21-.17.37-.38.37s-.37-.17-.37-.38c0-.21.17-.37.38-.37ZM12,11.62h-.38M8.25,11.25c.21,0,.37.17.37.38s-.17.37-.38.37-.37-.17-.37-.38.17-.37.38-.37ZM8.25,11.62h-.38M12,3.37c4.97,0,9,3.69,9,8.25,0,2.19-.93,4.18-2.45,5.65-.33.33-.56.77-.47,1.23.15.75.49,1.44.98,2.02-.16.03-.32.05-.47.07-1.43.14-2.86-.23-4.03-1.06-.83.22-1.69.34-2.56.34-4.97,0-9-3.69-9-8.25S7.03,3.37,12,3.37Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75,11.25c.21,0,.37.17.37.38,0,.21-.17.37-.38.37s-.37-.17-.37-.38c0-.21.17-.37.38-.37ZM15.75,11.62h-.38M12,11.25c.21,0,.37.17.37.38,0,.21-.17.37-.38.37s-.37-.17-.37-.38c0-.21.17-.37.38-.37ZM12,11.62h-.38M8.25,11.25c.21,0,.37.17.37.38s-.17.37-.38.37-.37-.17-.37-.38.17-.37.38-.37ZM8.25,11.62h-.38M12,3.37c4.97,0,9,3.69,9,8.25,0,2.19-.93,4.18-2.45,5.65-.33.33-.56.77-.47,1.23.15.75.49,1.44.98,2.02-.16.03-.32.05-.47.07-1.43.14-2.86-.23-4.03-1.06-.83.22-1.69.34-2.56.34-4.97,0-9-3.69-9-8.25S7.03,3.37,12,3.37Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75,11.25c.21,0,.37.17.37.38,0,.21-.17.37-.38.37s-.37-.17-.37-.38c0-.21.17-.37.38-.37ZM15.75,11.62h-.38M12,11.25c.21,0,.37.17.37.38,0,.21-.17.37-.38.37s-.37-.17-.37-.38c0-.21.17-.37.38-.37ZM12,11.62h-.38M8.25,11.25c.21,0,.37.17.37.38s-.17.37-.38.37-.37-.17-.37-.38.17-.37.38-.37ZM8.25,11.62h-.38M12,3.37c4.97,0,9,3.69,9,8.25,0,2.19-.93,4.18-2.45,5.65-.33.33-.56.77-.47,1.23.15.75.49,1.44.98,2.02-.16.03-.32.05-.47.07-1.43.14-2.86-.23-4.03-1.06-.83.22-1.69.34-2.56.34-4.97,0-9-3.69-9-8.25S7.03,3.37,12,3.37Z"/>
            </svg>`,
    },
    {
      name: 'collapse',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.77,9.77h6s0-6,0-6M9.77,9.77L3.77,3.77M14.23,3.77v6h6M14.23,9.77l6-6M20.23,14.23h-6s0,6,0,6M14.23,14.23l6,6M9.77,20.23v-6H3.77M9.77,14.23l-6,6"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" fill="none" d="M3.77,9.77h6s0-6,0-6M9.77,9.77L3.77,3.77M14.23,3.77v6h6M14.23,9.77l6-6M20.23,14.23h-6s0,6,0,6M14.23,14.23l6,6M9.77,20.23v-6H3.77M9.77,14.23l-6,6"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.77,9.77h6s0-6,0-6M9.77,9.77L3.77,3.77M14.23,3.77v6h6M14.23,9.77l6-6M20.23,14.23h-6s0,6,0,6M14.23,14.23l6,6M9.77,20.23v-6H3.77M9.77,14.23l-6,6"/>
            </svg>`,
    },
    {
      name: 'collapse-2',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.77,9.77h6s0-6,0-6M9.77,9.77L3.77,3.77M20.23,14.23h-6s0,6,0,6M14.23,14.23l6,6"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" fill="none" d="M3.77,9.77h6s0-6,0-6M9.77,9.77L3.77,3.77M20.23,14.23h-6s0,6,0,6M14.23,14.23l6,6"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.77,9.77h6s0-6,0-6M9.77,9.77L3.77,3.77M20.23,14.23h-6s0,6,0,6M14.23,14.23l6,6"/>
            </svg>`,
    },
    {
      name: 'collapse-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5,9.85l-7.5,7.5-7.5-7.5M12,17.35V2.35M19.5,19.89h-15"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5,9.85l-7.5,7.5-7.5-7.5M12,17.35V2.35M19.5,19.89h-15"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5,9.85l-7.5,7.5-7.5-7.5M12,17.35V2.35M19.5,19.89h-15"/>
            </svg>`,
    },
    {
      name: 'collapse-left',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.15,19.5l-7.5-7.5,7.5-7.5M6.65,12h15M4.11,19.5v-15"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.15,19.5l-7.5-7.5,7.5-7.5M6.65,12h15M4.11,19.5v-15"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.15,19.5l-7.5-7.5,7.5-7.5M6.65,12h15M4.11,19.5v-15"/>
            </svg>`,
    },
    {
      name: 'collapse-right',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.85,4.5l7.5,7.5-7.5,7.5M17.35,12H2.35M19.89,4.5v15"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.85,4.5l7.5,7.5-7.5,7.5M17.35,12H2.35M19.89,4.5v15"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.85,4.5l7.5,7.5-7.5,7.5M17.35,12H2.35M19.89,4.5v15"/>
            </svg>`,
    },
    {
      name: 'collapse-up',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5,14.15l7.5-7.5,7.5,7.5M12,6.65v15M4.5,4.11h15"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5,14.15l7.5-7.5,7.5,7.5M12,6.65v15M4.5,4.11h15"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5,14.15l7.5-7.5,7.5,7.5M12,6.65v15M4.5,4.11h15"/>
            </svg>`,
    },
    {
      name: 'command-line',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.78,6.94l6.74,5.06-6.74,5.06M11.91,17.06h7.31"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.78,6.94l6.74,5.06-6.74,5.06M11.91,17.06h7.31"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.78,6.94l6.74,5.06-6.74,5.06M11.91,17.06h7.31"/>
            </svg>`,
    },
    {
      name: 'command-line-2',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25,20.25h13.5c1.24,0,2.25-1.01,2.25-2.25V6c0-1.24-1.01-2.25-2.25-2.25H5.25c-1.24,0-2.25,1.01-2.25,2.25v12c0,1.24,1.01,2.25,2.25,2.25ZM7.43,9.26l3.65,2.74-3.65,2.74M12.91,14.74h3.65"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25,20.25h13.5c1.24,0,2.25-1.01,2.25-2.25V6c0-1.24-1.01-2.25-2.25-2.25H5.25c-1.24,0-2.25,1.01-2.25,2.25v12c0,1.24,1.01,2.25,2.25,2.25ZM7.43,9.26l3.65,2.74-3.65,2.74M12.91,14.74h3.65"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25,20.25h13.5c1.24,0,2.25-1.01,2.25-2.25V6c0-1.24-1.01-2.25-2.25-2.25H5.25c-1.24,0-2.25,1.01-2.25,2.25v12c0,1.24,1.01,2.25,2.25,2.25ZM7.43,9.26l3.65,2.74-3.65,2.74M12.91,14.74h3.65"/>
            </svg>`,
    },
    {
      name: 'copy',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" fill="none" d="M4.26 11.33a2.07 2.07 0 0 1 2.07-2.07h6.34a2.07 2.07 0 0 1 2.07 2.07v6.34a2.07 2.07 0 0 1-2.07 2.07H6.33a2.07 2.07 0 0 1-2.07-2.07v-6.34ZM14.74 14.74h2.94a2.07 2.07 0 0 0 2.07-2.07v-6.34a2.07 2.07 0 0 0-2.07-2.07h-6.34a2.07 2.07 0 0 0-2.07 2.07v2.94"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" fill="none" d="M4.26 11.33a2.07 2.07 0 0 1 2.07-2.07h6.34a2.07 2.07 0 0 1 2.07 2.07v6.34a2.07 2.07 0 0 1-2.07 2.07H6.33a2.07 2.07 0 0 1-2.07-2.07v-6.34ZM14.74 14.74h2.94a2.07 2.07 0 0 0 2.07-2.07v-6.34a2.07 2.07 0 0 0-2.07-2.07h-6.34a2.07 2.07 0 0 0-2.07 2.07v2.94"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" fill="none" d="M4.26 11.33a2.07 2.07 0 0 1 2.07-2.07h6.34a2.07 2.07 0 0 1 2.07 2.07v6.34a2.07 2.07 0 0 1-2.07 2.07H6.33a2.07 2.07 0 0 1-2.07-2.07v-6.34ZM14.74 14.74h2.94a2.07 2.07 0 0 0 2.07-2.07v-6.34a2.07 2.07 0 0 0-2.07-2.07h-6.34a2.07 2.07 0 0 0-2.07 2.07v2.94"/>
            </svg>`,
    },
    {
      name: 'credit-card',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeMiterlimit={10} className="size-6">
          <rect x="2.76" y="4.85" width="18.48" height="14.29" rx="2.95" ry="2.95" />
          <rect x="15" y="12.91" width="2.7" height="2.7" rx="0.53" ry="0.53" />
          <path d="M2.76 9.49h18.48" />
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-miterlimit="10">
              <rect x="2.76" y="4.85" width="18.48" height="14.29" rx="2.95" ry="2.95"/>
              <rect x="15" y="12.91" width="2.7" height="2.7" rx="0.53" ry="0.53"/>
              <path d="M2.76 9.49h18.48"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeMiterlimit={10} className="size-6">
              <rect x="2.76" y="4.85" width="18.48" height="14.29" rx="2.95" ry="2.95" />
              <rect x="15" y="12.91" width="2.7" height="2.7" rx="0.53" ry="0.53" />
              <path d="M2.76 9.49h18.48" />
            </svg>`,
    },
    {
      name: 'cube',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.77,7.62L12,2.5,3.23,7.62M20.77,7.62l-8.77,5.12M20.77,7.62v8.77l-8.77,5.12M3.23,7.62l8.77,5.12M3.23,7.62v8.77l8.77,5.12M12,12.73v8.77"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.77,7.62L12,2.5,3.23,7.62M20.77,7.62l-8.77,5.12M20.77,7.62v8.77l-8.77,5.12M3.23,7.62l8.77,5.12M3.23,7.62v8.77l8.77,5.12M12,12.73v8.77"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.77,7.62L12,2.5,3.23,7.62M20.77,7.62l-8.77,5.12M20.77,7.62v8.77l-8.77,5.12M3.23,7.62l8.77,5.12M3.23,7.62v8.77l8.77,5.12M12,12.73v8.77"/>
            </svg>`,
    },
    {
      name: 'check',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <polyline strokeLinecap="round" strokeLinejoin="round" fill="none" points="6.36 12.3 10.93 17.53 18.84 5.75"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="6.36 12.3 10.93 17.53 18.84 5.75"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <polyline strokeLinecap="round" strokeLinejoin="round" fill="none" points="6.36 12.3 10.93 17.53 18.84 5.75"/>
            </svg>`,
    },
    {
      name: 'check-cricle',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9ZM8.44,12.38l2.61,2.99,4.52-6.73"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9ZM8.44,12.38l2.61,2.99,4.52-6.73"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9ZM8.44,12.38l2.61,2.99,4.52-6.73"/>
            </svg>`,
    },
    {
      name: 'chevron-up-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5,15.51l4.5,4.5,4.5-4.5M7.5,9.39l4.5-4.5,4.5,4.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5,15.51l4.5,4.5,4.5-4.5M7.5,9.39l4.5-4.5,4.5,4.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5,15.51l4.5,4.5,4.5-4.5M7.5,9.39l4.5-4.5,4.5,4.5"/>
            </svg>`,
    },
    {
      name: 'chip',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5,9.01h-1.5M21,9.01h-1.5M4.5,14.99h-1.5M21,14.99h-1.5M7.67,19.5h8.66c1.75,0,3.17-1.42,3.17-3.17V7.67c0-1.75-1.42-3.17-3.17-3.17H7.67c-1.75,0-3.17,1.42-3.17,3.17v8.66c0,1.75,1.42,3.17,3.17,3.17ZM8.09,7.5h7.82c.33,0,.59.26.59.59v7.82c0,.33-.26.59-.59.59h-7.82c-.33,0-.59-.26-.59-.59v-7.82c0-.33.26-.59.59-.59ZM14.99,4.5v-1.5M14.99,21v-1.5M9.01,4.5v-1.5M9.01,21v-1.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5,9.01h-1.5M21,9.01h-1.5M4.5,14.99h-1.5M21,14.99h-1.5M7.67,19.5h8.66c1.75,0,3.17-1.42,3.17-3.17V7.67c0-1.75-1.42-3.17-3.17-3.17H7.67c-1.75,0-3.17,1.42-3.17,3.17v8.66c0,1.75,1.42,3.17,3.17,3.17ZM8.09,7.5h7.82c.33,0,.59.26.59.59v7.82c0,.33-.26.59-.59.59h-7.82c-.33,0-.59-.26-.59-.59v-7.82c0-.33.26-.59.59-.59ZM14.99,4.5v-1.5M14.99,21v-1.5M9.01,4.5v-1.5M9.01,21v-1.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5,9.01h-1.5M21,9.01h-1.5M4.5,14.99h-1.5M21,14.99h-1.5M7.67,19.5h8.66c1.75,0,3.17-1.42,3.17-3.17V7.67c0-1.75-1.42-3.17-3.17-3.17H7.67c-1.75,0-3.17,1.42-3.17,3.17v8.66c0,1.75,1.42,3.17,3.17,3.17ZM8.09,7.5h7.82c.33,0,.59.26.59.59v7.82c0,.33-.26.59-.59.59h-7.82c-.33,0-.59-.26-.59-.59v-7.82c0-.33.26-.59.59-.59ZM14.99,4.5v-1.5M14.99,21v-1.5M9.01,4.5v-1.5M9.01,21v-1.5"/>
            </svg>`,
    },
    {
      name: 'clipboard',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.38,4.51c-.25-.89-1.07-1.51-2-1.51h-2.77c-.95,0-1.75.64-2,1.51M15.38,4.51c.05.18.08.37.08.56h0c0,.38-.31.69-.69.69h-5.54c-.38,0-.69-.31-.69-.69h0c0-.2.03-.39.08-.56M15.38,4.51c.6.05,1.19.1,1.78.17,1.02.12,1.76.99,1.76,2.02v12.22c0,1.15-.93,2.08-2.08,2.08H7.15c-1.15,0-2.08-.93-2.08-2.08V6.7c0-1.02.74-1.9,1.76-2.02.59-.07,1.18-.13,1.78-.17"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.38,4.51c-.25-.89-1.07-1.51-2-1.51h-2.77c-.95,0-1.75.64-2,1.51M15.38,4.51c.05.18.08.37.08.56h0c0,.38-.31.69-.69.69h-5.54c-.38,0-.69-.31-.69-.69h0c0-.2.03-.39.08-.56M15.38,4.51c.6.05,1.19.1,1.78.17,1.02.12,1.76.99,1.76,2.02v12.22c0,1.15-.93,2.08-2.08,2.08H7.15c-1.15,0-2.08-.93-2.08-2.08V6.7c0-1.02.74-1.9,1.76-2.02.59-.07,1.18-.13,1.78-.17"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.38,4.51c-.25-.89-1.07-1.51-2-1.51h-2.77c-.95,0-1.75.64-2,1.51M15.38,4.51c.05.18.08.37.08.56h0c0,.38-.31.69-.69.69h-5.54c-.38,0-.69-.31-.69-.69h0c0-.2.03-.39.08-.56M15.38,4.51c.6.05,1.19.1,1.78.17,1.02.12,1.76.99,1.76,2.02v12.22c0,1.15-.93,2.08-2.08,2.08H7.15c-1.15,0-2.08-.93-2.08-2.08V6.7c0-1.02.74-1.9,1.76-2.02.59-.07,1.18-.13,1.78-.17"/>
            </svg>`,
    },
    {
      name: 'clock',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12,6.23v5.77h4.5M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12,6.23v5.77h4.5M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12,6.23v5.77h4.5M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
            </svg>`,
    },
    {
      name: 'clock-activity',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeMiterlimit={10} className="size-6">
          <path d="M8.95,9.16H3.87v-5.07M4.42,13.3c.61,3.75,3.87,6.62,7.79,6.62,4.37,0,7.91-3.54,7.91-7.91s-3.54-7.91-7.91-7.91c-2.19,0-4.16.89-5.6,2.32h0l-2.74,2.74" />
          <polyline points="12 6.56 12 12 14.86 14.49" />
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-miterlimit="10">
              <path d="M8.95,9.16H3.87v-5.07M4.42,13.3c.61,3.75,3.87,6.62,7.79,6.62,4.37,0,7.91-3.54,7.91-7.91s-3.54-7.91-7.91-7.91c-2.19,0-4.16.89-5.6,2.32h0l-2.74,2.74"/>
              <polyline points="12 6.56 12 12 14.86 14.49"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeMiterlimit={10} className="size-6">
              <path d="M8.95,9.16H3.87v-5.07M4.42,13.3c.61,3.75,3.87,6.62,7.79,6.62,4.37,0,7.91-3.54,7.91-7.91s-3.54-7.91-7.91-7.91c-2.19,0-4.16.89-5.6,2.32h0l-2.74,2.74" />
              <polyline points="12 6.56 12 12 14.86 14.49" />
            </svg>`,
    },
    {
      name: 'cloud',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.64,11.31c.1-.28.17-.58.17-.89,0-1.44-1.17-2.61-2.61-2.61-.4,0-.78.1-1.12.26-.9-1.55-2.58-2.6-4.51-2.6-2.88,0-5.22,2.34-5.22,5.22,0,.21.02.41.04.62-1.39.54-2.38,1.89-2.38,3.48,0,2.07,1.68,3.74,3.74,3.74h10.51c2.07,0,3.74-1.68,3.74-3.74,0-1.58-.98-2.92-2.36-3.47Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.64,11.31c.1-.28.17-.58.17-.89,0-1.44-1.17-2.61-2.61-2.61-.4,0-.78.1-1.12.26-.9-1.55-2.58-2.6-4.51-2.6-2.88,0-5.22,2.34-5.22,5.22,0,.21.02.41.04.62-1.39.54-2.38,1.89-2.38,3.48,0,2.07,1.68,3.74,3.74,3.74h10.51c2.07,0,3.74-1.68,3.74-3.74,0-1.58-.98-2.92-2.36-3.47Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.64,11.31c.1-.28.17-.58.17-.89,0-1.44-1.17-2.61-2.61-2.61-.4,0-.78.1-1.12.26-.9-1.55-2.58-2.6-4.51-2.6-2.88,0-5.22,2.34-5.22,5.22,0,.21.02.41.04.62-1.39.54-2.38,1.89-2.38,3.48,0,2.07,1.68,3.74,3.74,3.74h10.51c2.07,0,3.74-1.68,3.74-3.74,0-1.58-.98-2.92-2.36-3.47Z"/>
            </svg>`,
    },
    {
      name: 'cloud-arrow-down',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.64,11.31c.1-.28.17-.58.17-.89,0-1.44-1.17-2.61-2.61-2.61-.4,0-.78.1-1.12.26-.9-1.55-2.58-2.6-4.51-2.6-2.88,0-5.22,2.34-5.22,5.22,0,.21.02.41.04.62-1.39.54-2.38,1.89-2.38,3.48,0,2.07,1.68,3.74,3.74,3.74h10.51c2.07,0,3.74-1.68,3.74-3.74,0-1.58-.98-2.92-2.36-3.47Z"/>
          <line x1="12" y1="9.18" x2="12" y2="15.93" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="15.93" x2="9" y2="12.93" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="15.93" x2="15" y2="12.93" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.64,11.31c.1-.28.17-.58.17-.89,0-1.44-1.17-2.61-2.61-2.61-.4,0-.78.1-1.12.26-.9-1.55-2.58-2.6-4.51-2.6-2.88,0-5.22,2.34-5.22,5.22,0,.21.02.41.04.62-1.39.54-2.38,1.89-2.38,3.48,0,2.07,1.68,3.74,3.74,3.74h10.51c2.07,0,3.74-1.68,3.74-3.74,0-1.58-.98-2.92-2.36-3.47Z"/>
              <line x1="12" y1="9.18" x2="12" y2="15.93" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="12" y1="15.93" x2="9" y2="12.93" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="12" y1="15.93" x2="15" y2="12.93" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.64,11.31c.1-.28.17-.58.17-.89,0-1.44-1.17-2.61-2.61-2.61-.4,0-.78.1-1.12.26-.9-1.55-2.58-2.6-4.51-2.6-2.88,0-5.22,2.34-5.22,5.22,0,.21.02.41.04.62-1.39.54-2.38,1.89-2.38,3.48,0,2.07,1.68,3.74,3.74,3.74h10.51c2.07,0,3.74-1.68,3.74-3.74,0-1.58-.98-2.92-2.36-3.47Z"/>
              <line x1="12" y1="9.18" x2="12" y2="15.93" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="15.93" x2="9" y2="12.93" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="15.93" x2="15" y2="12.93" strokeLinecap="round" strokeLinejoin="round" />
            </svg>`,
    },
    {
      name: 'cloud-arrow-up',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.64,11.31c.1-.28.17-.58.17-.89,0-1.44-1.17-2.61-2.61-2.61-.4,0-.78.1-1.12.26-.9-1.55-2.58-2.6-4.51-2.6-2.88,0-5.22,2.34-5.22,5.22,0,.21.02.41.04.62-1.39.54-2.38,1.89-2.38,3.48,0,2.07,1.68,3.74,3.74,3.74h10.51c2.07,0,3.74-1.68,3.74-3.74,0-1.58-.98-2.92-2.36-3.47Z"/>
          <line x1="12" y1="15.93" x2="12" y2="9.18" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="9.18" x2="15" y2="12.18" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="9.18" x2="9" y2="12.18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.64,11.31c.1-.28.17-.58.17-.89,0-1.44-1.17-2.61-2.61-2.61-.4,0-.78.1-1.12.26-.9-1.55-2.58-2.6-4.51-2.6-2.88,0-5.22,2.34-5.22,5.22,0,.21.02.41.04.62-1.39.54-2.38,1.89-2.38,3.48,0,2.07,1.68,3.74,3.74,3.74h10.51c2.07,0,3.74-1.68,3.74-3.74,0-1.58-.98-2.92-2.36-3.47Z"/>
              <line x1="12" y1="15.93" x2="12" y2="9.18" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="12" y1="9.18" x2="15" y2="12.18" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="12" y1="9.18" x2="9" y2="12.18" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.64,11.31c.1-.28.17-.58.17-.89,0-1.44-1.17-2.61-2.61-2.61-.4,0-.78.1-1.12.26-.9-1.55-2.58-2.6-4.51-2.6-2.88,0-5.22,2.34-5.22,5.22,0,.21.02.41.04.62-1.39.54-2.38,1.89-2.38,3.48,0,2.07,1.68,3.74,3.74,3.74h10.51c2.07,0,3.74-1.68,3.74-3.74,0-1.58-.98-2.92-2.36-3.47Z"/>
              <line x1="12" y1="15.93" x2="12" y2="9.18" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="9.18" x2="15" y2="12.18" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="9.18" x2="9" y2="12.18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>`,
    },
    {
      name: 'code',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.75,7.25l4.75,4.75-4.75,4.75M7.25,16.75l-4.75-4.75,4.75-4.75M14.04,4.54l-4.07,14.93"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.75,7.25l4.75,4.75-4.75,4.75M7.25,16.75l-4.75-4.75,4.75-4.75M14.04,4.54l-4.07,14.93"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.75,7.25l4.75,4.75-4.75,4.75M7.25,16.75l-4.75-4.75,4.75-4.75M14.04,4.54l-4.07,14.93"/>
            </svg>`,
    },
    {
      name: 'code-square',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6,20.25h12c1.24,0,2.25-1.01,2.25-2.25V6c0-1.24-1.01-2.25-2.25-2.25H6c-1.24,0-2.25,1.01-2.25,2.25v12c0,1.24,1.01,2.25,2.25,2.25ZM14.27,9.44l2.56,2.56-2.56,2.56M9.73,14.56l-2.56-2.56,2.56-2.56"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6,20.25h12c1.24,0,2.25-1.01,2.25-2.25V6c0-1.24-1.01-2.25-2.25-2.25H6c-1.24,0-2.25,1.01-2.25,2.25v12c0,1.24,1.01,2.25,2.25,2.25ZM14.27,9.44l2.56,2.56-2.56,2.56M9.73,14.56l-2.56-2.56,2.56-2.56"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6,20.25h12c1.24,0,2.25-1.01,2.25-2.25V6c0-1.24-1.01-2.25-2.25-2.25H6c-1.24,0-2.25,1.01-2.25,2.25v12c0,1.24,1.01,2.25,2.25,2.25ZM14.27,9.44l2.56,2.56-2.56,2.56M9.73,14.56l-2.56-2.56,2.56-2.56"/>
            </svg>`,
    },
    {
      name: 'database',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20,6.55c0,2.21-3.58,4-8,4s-8-1.79-8-4M20,6.55c0-2.21-3.58-4-8-4s-8,1.79-8,4M20,6.55v10.91c0,2.21-3.58,4-8,4s-8-1.79-8-4V6.55M20,6.55v3.64M4,6.55v3.64M20,10.18v3.64c0,2.21-3.58,4-8,4s-8-1.79-8-4v-3.64M20,10.18c0,2.21-3.58,4-8,4s-8-1.79-8-4"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20,6.55c0,2.21-3.58,4-8,4s-8-1.79-8-4M20,6.55c0-2.21-3.58-4-8-4s-8,1.79-8,4M20,6.55v10.91c0,2.21-3.58,4-8,4s-8-1.79-8-4V6.55M20,6.55v3.64M4,6.55v3.64M20,10.18v3.64c0,2.21-3.58,4-8,4s-8-1.79-8-4v-3.64M20,10.18c0,2.21-3.58,4-8,4s-8-1.79-8-4"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20,6.55c0,2.21-3.58,4-8,4s-8-1.79-8-4M20,6.55c0-2.21-3.58-4-8-4s-8,1.79-8,4M20,6.55v10.91c0,2.21-3.58,4-8,4s-8-1.79-8-4V6.55M20,6.55v3.64M4,6.55v3.64M20,10.18v3.64c0,2.21-3.58,4-8,4s-8-1.79-8-4v-3.64M20,10.18c0,2.21-3.58,4-8,4s-8-1.79-8-4"/>
            </svg>`,
    },
    {
      name: 'desktop',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9,16.12v1.01c0,.8-.32,1.56-.88,2.12l-.62.62h9l-.62-.62c-.56-.56-.88-1.33-.88-2.12v-1.01M21,6.38v7.5c0,1.24-1.01,2.25-2.25,2.25H5.25c-1.24,0-2.25-1.01-2.25-2.25v-7.5M21,6.38c0-1.24-1.01-2.25-2.25-2.25H5.25c-1.24,0-2.25,1.01-2.25,2.25"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9,16.12v1.01c0,.8-.32,1.56-.88,2.12l-.62.62h9l-.62-.62c-.56-.56-.88-1.33-.88-2.12v-1.01M21,6.38v7.5c0,1.24-1.01,2.25-2.25,2.25H5.25c-1.24,0-2.25-1.01-2.25-2.25v-7.5M21,6.38c0-1.24-1.01-2.25-2.25-2.25H5.25c-1.24,0-2.25,1.01-2.25,2.25"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9,16.12v1.01c0,.8-.32,1.56-.88,2.12l-.62.62h9l-.62-.62c-.56-.56-.88-1.33-.88-2.12v-1.01M21,6.38v7.5c0,1.24-1.01,2.25-2.25,2.25H5.25c-1.24,0-2.25-1.01-2.25-2.25v-7.5M21,6.38c0-1.24-1.01-2.25-2.25-2.25H5.25c-1.24,0-2.25,1.01-2.25,2.25"/>
            </svg>`,
    },
    {
      name: 'dots-horizontal',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75,12c0,.41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75ZM12.75,12c0,.41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75ZM18.75,12c0,.41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75,12c0,.41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75ZM12.75,12c0,.41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75ZM18.75,12c0,.41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75,12c0,.41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75ZM12.75,12c0,.41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75ZM18.75,12c0,.41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75Z"/>
            </svg>`,
    },
    {
      name: 'dots-vertical',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12,6.75c-.41,0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75ZM12,12.75c-.41,0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75ZM12,18.75c-.41,0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12,6.75c-.41,0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75ZM12,12.75c-.41,0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75ZM12,18.75c-.41,0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12,6.75c-.41,0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75ZM12,12.75c-.41,0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75ZM12,18.75c-.41,0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75Z"/>
            </svg>`,
    },
    {
      name: 'document',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.88,2.5h7.44c3.31,0,5.99,2.68,5.99,5.99v11.82c0,.65-.53,1.19-1.19,1.19H5.88c-.65,0-1.19-.53-1.19-1.19V3.69c0-.65.53-1.19,1.19-1.19Z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.32,2.62v4.12c0,.77.63,1.4,1.4,1.4h4.51"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.88,2.5h7.44c3.31,0,5.99,2.68,5.99,5.99v11.82c0,.65-.53,1.19-1.19,1.19H5.88c-.65,0-1.19-.53-1.19-1.19V3.69c0-.65.53-1.19,1.19-1.19Z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.32,2.62v4.12c0,.77.63,1.4,1.4,1.4h4.51"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.88,2.5h7.44c3.31,0,5.99,2.68,5.99,5.99v11.82c0,.65-.53,1.19-1.19,1.19H5.88c-.65,0-1.19-.53-1.19-1.19V3.69c0-.65.53-1.19,1.19-1.19Z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.32,2.62v4.12c0,.77.63,1.4,1.4,1.4h4.51"/>
            </svg>`,
    },
    {
      name: 'download',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.43 11.07L12 16.5L6.57 11.07M12 16.5V4.02M21.53 16.26v2.24c0 1.38-1.12 2.5-2.5 2.5H4.97c-1.38 0-2.5-1.12-2.5-2.5v-2.24"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.43 11.07L12 16.5L6.57 11.07M12 16.5V4.02M21.53 16.26v2.24c0 1.38-1.12 2.5-2.5 2.5H4.97c-1.38 0-2.5-1.12-2.5-2.5v-2.24"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.43 11.07L12 16.5L6.57 11.07M12 16.5V4.02M21.53 16.26v2.24c0 1.38-1.12 2.5-2.5 2.5H4.97c-1.38 0-2.5-1.12-2.5-2.5v-2.24"/>
            </svg>`,
    },
    {
      name: 'expand',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.77,3.77H3.77s0,6,0,6M3.77,3.77l6,6M20.23,9.77V3.77s-6,0-6,0M20.23,3.77l-6,6M14.23,20.23h6s0-6,0-6M20.23,20.23l-6-6M3.77,14.23v6h6M3.77,20.23l6-6"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.77,3.77H3.77s0,6,0,6M3.77,3.77l6,6M20.23,9.77V3.77s-6,0-6,0M20.23,3.77l-6,6M14.23,20.23h6s0-6,0-6M20.23,20.23l-6-6M3.77,14.23v6h6M3.77,20.23l6-6"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.77,3.77H3.77s0,6,0,6M3.77,3.77l6,6M20.23,9.77V3.77s-6,0-6,0M20.23,3.77l-6,6M14.23,20.23h6s0-6,0-6M20.23,20.23l-6-6M3.77,14.23v6h6M3.77,20.23l6-6"/>
            </svg>`,
    },
    {
      name: 'expand-simple',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.77,3.77H3.77s0,6,0,6M3.77,3.77l6,6M14.23,20.23h6s0-6,0-6M20.23,20.23l-6-6"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.77,3.77H3.77s0,6,0,6M3.77,3.77l6,6M14.23,20.23h6s0-6,0-6M20.23,20.23l-6-6"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.77,3.77H3.77s0,6,0,6M3.77,3.77l6,6M14.23,20.23h6s0-6,0-6M20.23,20.23l-6-6"/>
            </svg>`,
    },
    {
      name: 'eye',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.55,12.31c-.07-.2-.07-.41,0-.61,1.32-3.96,5.05-6.81,9.45-6.81s8.13,2.85,9.45,6.81c.07.2.07.41,0,.61-1.31,3.96-5.05,6.81-9.45,6.81s-8.13-2.85-9.45-6.81h0Z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.85,12c0,1.57-1.27,2.85-2.85,2.85s-2.85-1.27-2.85-2.85,1.27-2.85,2.85-2.85,2.85,1.27,2.85,2.85Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.55,12.31c-.07-.2-.07-.41,0-.61,1.32-3.96,5.05-6.81,9.45-6.81s8.13,2.85,9.45,6.81c.07.2.07.41,0,.61-1.31,3.96-5.05,6.81-9.45,6.81s-8.13-2.85-9.45-6.81h0Z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.85,12c0,1.57-1.27,2.85-2.85,2.85s-2.85-1.27-2.85-2.85,1.27-2.85,2.85-2.85,2.85,1.27,2.85,2.85Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.55,12.31c-.07-.2-.07-.41,0-.61,1.32-3.96,5.05-6.81,9.45-6.81s8.13,2.85,9.45,6.81c.07.2.07.41,0,.61-1.31,3.96-5.05,6.81-9.45,6.81s-8.13-2.85-9.45-6.81h0Z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.85,12c0,1.57-1.27,2.85-2.85,2.85s-2.85-1.27-2.85-2.85,1.27-2.85,2.85-2.85,2.85,1.27,2.85,2.85Z"/>
            </svg>`,
    },
    {
      name: 'eye-hidden',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.43,8.44c-.88,1.04-1.54,2.26-1.93,3.56,1.22,4.09,5.01,7.08,9.5,7.08.94,0,1.84-.13,2.7-.37M6.55,6.55c1.62-1.07,3.51-1.63,5.45-1.63,4.49,0,8.28,2.98,9.5,7.08-.67,2.24-2.1,4.17-4.05,5.45M6.55,6.55l-3.05-3.05M6.55,6.55l3.44,3.44M17.45,17.45l3.05,3.05M17.45,17.45l-3.44-3.44M14,14c1.11-1.11,1.11-2.9,0-4s-2.9-1.11-4,0M14,14l-4-4"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.43,8.44c-.88,1.04-1.54,2.26-1.93,3.56,1.22,4.09,5.01,7.08,9.5,7.08.94,0,1.84-.13,2.7-.37M6.55,6.55c1.62-1.07,3.51-1.63,5.45-1.63,4.49,0,8.28,2.98,9.5,7.08-.67,2.24-2.1,4.17-4.05,5.45M6.55,6.55l-3.05-3.05M6.55,6.55l3.44,3.44M17.45,17.45l3.05,3.05M17.45,17.45l-3.44-3.44M14,14c1.11-1.11,1.11-2.9,0-4s-2.9-1.11-4,0M14,14l-4-4"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.43,8.44c-.88,1.04-1.54,2.26-1.93,3.56,1.22,4.09,5.01,7.08,9.5,7.08.94,0,1.84-.13,2.7-.37M6.55,6.55c1.62-1.07,3.51-1.63,5.45-1.63,4.49,0,8.28,2.98,9.5,7.08-.67,2.24-2.1,4.17-4.05,5.45M6.55,6.55l-3.05-3.05M6.55,6.55l3.44,3.44M17.45,17.45l3.05,3.05M17.45,17.45l-3.44-3.44M14,14c1.11-1.11,1.11-2.9,0-4s-2.9-1.11-4,0M14,14l-4-4"/>
            </svg>`,
    },
    {
      name: 'face-happy',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.18,15.18c-1.76,1.76-4.61,1.76-6.36,0h0M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9ZM9.94,9.75c0,.41-.17.75-.38.75s-.38-.34-.38-.75.17-.75.38-.75.38.34.38.75ZM9.38,9.75h0v.02h0v-.02ZM14.81,9.75c0,.41-.17.75-.38.75s-.38-.34-.38-.75.17-.75.38-.75.38.34.38.75ZM14.62,9.75h0v.02h0v-.02Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.18,15.18c-1.76,1.76-4.61,1.76-6.36,0h0M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9ZM9.94,9.75c0,.41-.17.75-.38.75s-.38-.34-.38-.75.17-.75.38-.75.38.34.38.75ZM9.38,9.75h0v.02h0v-.02ZM14.81,9.75c0,.41-.17.75-.38.75s-.38-.34-.38-.75.17-.75.38-.75.38.34.38.75ZM14.62,9.75h0v.02h0v-.02Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.18,15.18c-1.76,1.76-4.61,1.76-6.36,0h0M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9ZM9.94,9.75c0,.41-.17.75-.38.75s-.38-.34-.38-.75.17-.75.38-.75.38.34.38.75ZM9.38,9.75h0v.02h0v-.02ZM14.81,9.75c0,.41-.17.75-.38.75s-.38-.34-.38-.75.17-.75.38-.75.38.34.38.75ZM14.62,9.75h0v.02h0v-.02Z"/>
            </svg>`,
    },
    {
      name: 'face-sad',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.82,16.5c1.76-1.76,4.61-1.76,6.36,0h0M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9ZM9.94,9.75c0,.41-.17.75-.38.75s-.38-.34-.38-.75.17-.75.38-.75.38.34.38.75ZM9.38,9.75h0v.02h0v-.02ZM14.81,9.75c0,.41-.17.75-.38.75s-.38-.34-.38-.75.17-.75.38-.75.38.34.38.75ZM14.62,9.75h0v.02h0v-.02Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.82,16.5c1.76-1.76,4.61-1.76,6.36,0h0M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9ZM9.94,9.75c0,.41-.17.75-.38.75s-.38-.34-.38-.75.17-.75.38-.75.38.34.38.75ZM9.38,9.75h0v.02h0v-.02ZM14.81,9.75c0,.41-.17.75-.38.75s-.38-.34-.38-.75.17-.75.38-.75.38.34.38.75ZM14.62,9.75h0v.02h0v-.02Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.82,16.5c1.76-1.76,4.61-1.76,6.36,0h0M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9ZM9.94,9.75c0,.41-.17.75-.38.75s-.38-.34-.38-.75.17-.75.38-.75.38.34.38.75ZM9.38,9.75h0v.02h0v-.02ZM14.81,9.75c0,.41-.17.75-.38.75s-.38-.34-.38-.75.17-.75.38-.75.38.34.38.75ZM14.62,9.75h0v.02h0v-.02Z"/>
            </svg>`,
    },
    {
      name: 'facebook',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M24,12.07C24,5.41,18.63,0,12,0,5.37,0,0,5.41,0,12.07c0,6.02,4.39,11.02,10.12,11.93v-8.44h-3.04v-3.49h3.05v-2.66c0-3.03,1.79-4.7,4.53-4.7,1.31,0,2.69.24,2.69.24v2.97h-1.51c-1.49,0-1.95.93-1.95,1.89v2.26h3.33l-.53,3.49h-2.8v8.44c5.74-.91,10.12-5.9,10.12-11.93h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24,12.07C24,5.41,18.63,0,12,0,5.37,0,0,5.41,0,12.07c0,6.02,4.39,11.02,10.12,11.93v-8.44h-3.04v-3.49h3.05v-2.66c0-3.03,1.79-4.7,4.53-4.7,1.31,0,2.69.24,2.69.24v2.97h-1.51c-1.49,0-1.95.93-1.95,1.89v2.26h3.33l-.53,3.49h-2.8v8.44c5.74-.91,10.12-5.9,10.12-11.93h0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M24,12.07C24,5.41,18.63,0,12,0,5.37,0,0,5.41,0,12.07c0,6.02,4.39,11.02,10.12,11.93v-8.44h-3.04v-3.49h3.05v-2.66c0-3.03,1.79-4.7,4.53-4.7,1.31,0,2.69.24,2.69.24v2.97h-1.51c-1.49,0-1.95.93-1.95,1.89v2.26h3.33l-.53,3.49h-2.8v8.44c5.74-.91,10.12-5.9,10.12-11.93h0Z"/>
            </svg>`,
    },
    {
      name: 'file',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.94,3.55v4.54c0,1.1.89,2,2,2h4.54M18.72,10.66v8.04c0,1.11-.9,2-2,2H7.28c-1.11,0-2-.9-2-2V5.3c0-1.11.9-2,2-2h4.08c.53,0,1.04.21,1.42.59l5.36,5.36c.38.38.59.89.59,1.42Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.94,3.55v4.54c0,1.1.89,2,2,2h4.54M18.72,10.66v8.04c0,1.11-.9,2-2,2H7.28c-1.11,0-2-.9-2-2V5.3c0-1.11.9-2,2-2h4.08c.53,0,1.04.21,1.42.59l5.36,5.36c.38.38.59.89.59,1.42Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.94,3.55v4.54c0,1.1.89,2,2,2h4.54M18.72,10.66v8.04c0,1.11-.9,2-2,2H7.28c-1.11,0-2-.9-2-2V5.3c0-1.11.9-2,2-2h4.08c.53,0,1.04.21,1.42.59l5.36,5.36c.38.38.59.89.59,1.42Z"/>
            </svg>`,
    },
    {
      name: 'filter-horizontal',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.32 6.76H6.83M9.92 6.76H20.68M3.32 12H14.08M17.17 12H20.68M3.32 17.24H6.83M9.92 17.24H20.68M15.63 13.54a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08ZM8.37 8.3a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08ZM8.37 18.78a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.32 6.76H6.83M9.92 6.76H20.68M3.32 12H14.08M17.17 12H20.68M3.32 17.24H6.83M9.92 17.24H20.68M15.63 13.54a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08ZM8.37 8.3a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08ZM8.37 18.78a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.32 6.76H6.83M9.92 6.76H20.68M3.32 12H14.08M17.17 12H20.68M3.32 17.24H6.83M9.92 17.24H20.68M15.63 13.54a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08ZM8.37 8.3a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08ZM8.37 18.78a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08Z"/>
            </svg>`,
    },
    {
      name: 'filter-horizontal-2',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <line x1="19.68" y1="6.78" x2="10.85" y2="6.78" strokeLinecap="round" />
          <circle cx="7.45" cy="6.78" r="3.13" />
          <line x1="4.32" y1="17.22" x2="13.15" y2="17.22" strokeLinecap="round" />
          <circle cx="16.55" cy="17.22" r="3.13" />
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <line x1="19.68" y1="6.78" x2="10.85" y2="6.78" stroke-linecap="round"/>
              <circle cx="7.45" cy="6.78" r="3.13"/>
              <line x1="4.32" y1="17.22" x2="13.15" y2="17.22" stroke-linecap="round"/>
              <circle cx="16.55" cy="17.22" r="3.13"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <line x1="19.68" y1="6.78" x2="10.85" y2="6.78" strokeLinecap="round" />
              <circle cx="7.45" cy="6.78" r="3.13" />
              <line x1="4.32" y1="17.22" x2="13.15" y2="17.22" strokeLinecap="round" />
              <circle cx="16.55" cy="17.22" r="3.13" />
            </svg>`,
    },
    {
      name: 'filter-vertical',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.76,20.68v-3.51M6.76,14.08V3.32M12,20.68v-10.76M12,6.83v-3.51M17.24,20.68v-3.51M17.24,14.08V3.32M13.54,8.37c0,.85-.69,1.54-1.54,1.54s-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54ZM8.3,15.63c0,.85-.69,1.54-1.54,1.54-.85,0-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54ZM18.78,15.63c0,.85-.69,1.54-1.54,1.54-.85,0-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.76,20.68v-3.51M6.76,14.08V3.32M12,20.68v-10.76M12,6.83v-3.51M17.24,20.68v-3.51M17.24,14.08V3.32M13.54,8.37c0,.85-.69,1.54-1.54,1.54s-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54ZM8.3,15.63c0,.85-.69,1.54-1.54,1.54-.85,0-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54ZM18.78,15.63c0,.85-.69,1.54-1.54,1.54-.85,0-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.76,20.68v-3.51M6.76,14.08V3.32M12,20.68v-10.76M12,6.83v-3.51M17.24,20.68v-3.51M17.24,14.08V3.32M13.54,8.37c0,.85-.69,1.54-1.54,1.54s-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54ZM8.3,15.63c0,.85-.69,1.54-1.54,1.54-.85,0-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54ZM18.78,15.63c0,.85-.69,1.54-1.54,1.54-.85,0-1.54-.69-1.54-1.54h0c0-.85.69-1.54,1.54-1.54.85,0,1.54.69,1.54,1.54Z"/>
            </svg>`,
    },
    {
      name: 'filter-vertical-2',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <line x1="6.78" y1="4.32" x2="6.78" y2="13.15" strokeLinecap="round" />
          <circle cx="6.78" cy="16.55" r="3.13" />
          <line x1="17.22" y1="19.68" x2="17.22" y2="10.85" strokeLinecap="round" />
          <circle cx="17.22" cy="7.45" r="3.13" />
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <line x1="6.78" y1="4.32" x2="6.78" y2="13.15" stroke-linecap="round"/>
              <circle cx="6.78" cy="16.55" r="3.13"/>
              <line x1="17.22" y1="19.68" x2="17.22" y2="10.85" stroke-linecap="round"/>
              <circle cx="17.22" cy="7.45" r="3.13"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <line x1="6.78" y1="4.32" x2="6.78" y2="13.15" strokeLinecap="round" />
              <circle cx="6.78" cy="16.55" r="3.13" />
              <line x1="17.22" y1="19.68" x2="17.22" y2="10.85" strokeLinecap="round" />
              <circle cx="17.22" cy="7.45" r="3.13" />
            </svg>`,
    },
    {
      name: 'folder',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"/>
            </svg>`,
    },
    {
      name: 'folder-open',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"/>
            </svg>`,
    },
    {
      name: 'forward',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3,8.18c0-.81.88-1.32,1.59-.92l6.7,3.83c.51.29.69.94.39,1.45-.09.16-.23.3-.39.39l-6.7,3.83c-.51.29-1.16.11-1.45-.39-.09-.16-.14-.34-.14-.53v-7.65h0ZM12.18,8.18c0-.81.88-1.32,1.59-.92l6.7,3.83c.51.29.69.94.39,1.45-.09.16-.23.3-.39.39l-6.7,3.83c-.51.29-1.16.11-1.45-.39-.09-.16-.14-.34-.14-.53v-7.65h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3,8.18c0-.81.88-1.32,1.59-.92l6.7,3.83c.51.29.69.94.39,1.45-.09.16-.23.3-.39.39l-6.7,3.83c-.51.29-1.16.11-1.45-.39-.09-.16-.14-.34-.14-.53v-7.65h0ZM12.18,8.18c0-.81.88-1.32,1.59-.92l6.7,3.83c.51.29.69.94.39,1.45-.09.16-.23.3-.39.39l-6.7,3.83c-.51.29-1.16.11-1.45-.39-.09-.16-.14-.34-.14-.53v-7.65h0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3,8.18c0-.81.88-1.32,1.59-.92l6.7,3.83c.51.29.69.94.39,1.45-.09.16-.23.3-.39.39l-6.7,3.83c-.51.29-1.16.11-1.45-.39-.09-.16-.14-.34-.14-.53v-7.65h0ZM12.18,8.18c0-.81.88-1.32,1.59-.92l6.7,3.83c.51.29.69.94.39,1.45-.09.16-.23.3-.39.39l-6.7,3.83c-.51.29-1.16.11-1.45-.39-.09-.16-.14-.34-.14-.53v-7.65h0Z"/>
            </svg>`,
    },
    {
      name: 'github',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M11.99.31C5.36.31,0,5.67,0,12.29c0,5.31,3.43,9.79,8.19,11.38.6.1.82-.26.82-.57,0-.29-.01-1.23-.01-2.23-3.01.56-3.8-.73-4.03-1.41-.13-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.78-.01-.8.94-.01,1.62.87,1.84,1.23,1.08,1.81,2.8,1.3,3.5.99.1-.78.42-1.3.77-1.6-2.66-.3-5.45-1.33-5.45-5.92,0-1.3.47-2.39,1.23-3.22-.12-.3-.54-1.53.12-3.17,0,0,1-.31,3.3,1.23.95-.27,1.98-.4,3-.4s2.04.13,3,.4c2.3-1.55,3.3-1.23,3.3-1.23.65,1.65.24,2.88.12,3.17.77.84,1.23,1.9,1.23,3.22,0,4.6-2.8,5.62-5.47,5.92.43.38.81,1.1.81,2.22,0,1.6-.01,2.9-.01,3.3,0,.31.22.69.82.57,4.88-1.64,8.17-6.23,8.17-11.38-.02-6.63-5.38-11.99-12.01-11.99h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M11.99.31C5.36.31,0,5.67,0,12.29c0,5.31,3.43,9.79,8.19,11.38.6.1.82-.26.82-.57,0-.29-.01-1.23-.01-2.23-3.01.56-3.8-.73-4.03-1.41-.13-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.78-.01-.8.94-.01,1.62.87,1.84,1.23,1.08,1.81,2.8,1.3,3.5.99.1-.78.42-1.3.77-1.6-2.66-.3-5.45-1.33-5.45-5.92,0-1.3.47-2.39,1.23-3.22-.12-.3-.54-1.53.12-3.17,0,0,1-.31,3.3,1.23.95-.27,1.98-.4,3-.4s2.04.13,3,.4c2.3-1.55,3.3-1.23,3.3-1.23.65,1.65.24,2.88.12,3.17.77.84,1.23,1.9,1.23,3.22,0,4.6-2.8,5.62-5.47,5.92.43.38.81,1.1.81,2.22,0,1.6-.01,2.9-.01,3.3,0,.31.22.69.82.57,4.88-1.64,8.17-6.23,8.17-11.38-.02-6.63-5.38-11.99-12.01-11.99h0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M11.99.31C5.36.31,0,5.67,0,12.29c0,5.31,3.43,9.79,8.19,11.38.6.1.82-.26.82-.57,0-.29-.01-1.23-.01-2.23-3.01.56-3.8-.73-4.03-1.41-.13-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.78-.01-.8.94-.01,1.62.87,1.84,1.23,1.08,1.81,2.8,1.3,3.5.99.1-.78.42-1.3.77-1.6-2.66-.3-5.45-1.33-5.45-5.92,0-1.3.47-2.39,1.23-3.22-.12-.3-.54-1.53.12-3.17,0,0,1-.31,3.3,1.23.95-.27,1.98-.4,3-.4s2.04.13,3,.4c2.3-1.55,3.3-1.23,3.3-1.23.65,1.65.24,2.88.12,3.17.77.84,1.23,1.9,1.23,3.22,0,4.6-2.8,5.62-5.47,5.92.43.38.81,1.1.81,2.22,0,1.6-.01,2.9-.01,3.3,0,.31.22.69.82.57,4.88-1.64,8.17-6.23,8.17-11.38-.02-6.63-5.38-11.99-12.01-11.99h0Z"/>
            </svg>`,
    },
    {
      name: 'globe',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.95,3c-4.97.03-8.98,4.08-8.95,9.05.03,4.97,4.08,8.98,9.05,8.95,4.97-.03,8.98-4.08,8.95-9.05-.03-4.93-4.02-8.93-8.95-8.95h-.1ZM12,3v18M21,12H3M11.31,3.23c-4.87,4.11-5.48,11.39-1.37,16.26.42.49.88.95,1.37,1.37M12.69,20.86c4.87-4.11,5.48-11.39,1.37-16.26-.42-.49-.88-.95-1.37-1.37"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.95,3c-4.97.03-8.98,4.08-8.95,9.05.03,4.97,4.08,8.98,9.05,8.95,4.97-.03,8.98-4.08,8.95-9.05-.03-4.93-4.02-8.93-8.95-8.95h-.1ZM12,3v18M21,12H3M11.31,3.23c-4.87,4.11-5.48,11.39-1.37,16.26.42.49.88.95,1.37,1.37M12.69,20.86c4.87-4.11,5.48-11.39,1.37-16.26-.42-.49-.88-.95-1.37-1.37"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.95,3c-4.97.03-8.98,4.08-8.95,9.05.03,4.97,4.08,8.98,9.05,8.95,4.97-.03,8.98-4.08,8.95-9.05-.03-4.93-4.02-8.93-8.95-8.95h-.1ZM12,3v18M21,12H3M11.31,3.23c-4.87,4.11-5.48,11.39-1.37,16.26.42.49.88.95,1.37,1.37M12.69,20.86c4.87-4.11,5.48-11.39,1.37-16.26-.42-.49-.88-.95-1.37-1.37"/>
            </svg>`,
    },
    {
      name: 'heart',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21,8.25c0-2.48-2.1-4.5-4.69-4.5-1.93,0-3.6,1.13-4.31,2.73-.72-1.61-2.38-2.73-4.31-2.73-2.59,0-4.69,2.02-4.69,4.5,0,7.22,9,12,9,12,0,0,9-4.78,9-12Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21,8.25c0-2.48-2.1-4.5-4.69-4.5-1.93,0-3.6,1.13-4.31,2.73-.72-1.61-2.38-2.73-4.31-2.73-2.59,0-4.69,2.02-4.69,4.5,0,7.22,9,12,9,12,0,0,9-4.78,9-12Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21,8.25c0-2.48-2.1-4.5-4.69-4.5-1.93,0-3.6,1.13-4.31,2.73-.72-1.61-2.38-2.73-4.31-2.73-2.59,0-4.69,2.02-4.69,4.5,0,7.22,9,12,9,12,0,0,9-4.78,9-12Z"/>
            </svg>`,
    },
    {
      name: 'instagram',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M12.02,0C8.75,0,8.34.01,7.06.07c-1.28.07-2.16.27-2.91.57-.8.3-1.52.78-2.12,1.39-.61.6-1.08,1.32-1.39,2.12-.3.76-.5,1.63-.57,2.9-.06,1.29-.07,1.7-.07,4.96s.01,3.67.07,4.94c.06,1.28.26,2.14.56,2.91.31.79.72,1.46,1.39,2.12s1.33,1.08,2.12,1.39c.77.3,1.63.5,2.91.56,1.29.07,1.7.08,4.96.08s3.67-.01,4.95-.07,2.16-.26,2.91-.56c.8-.3,1.52-.78,2.12-1.39.67-.67,1.08-1.33,1.39-2.12.3-.77.5-1.63.56-2.91s.07-1.69.07-4.94-.01-3.67-.07-4.94-.27-2.14-.56-2.91c-.3-.8-.78-1.52-1.39-2.12-.6-.61-1.32-1.09-2.12-1.39-.77-.3-1.63-.5-2.91-.56-1.27-.08-1.68-.09-4.94-.09h0ZM10.93,2.17h1.08c3.2,0,3.59.01,4.85.07,1.17.06,1.81.24,2.23.41.56.22.96.48,1.38.9.42.42.68.82.9,1.38.17.42.36,1.06.41,2.22.06,1.27.07,1.64.07,4.84s-.01,3.59-.07,4.84c-.06,1.17-.24,1.8-.41,2.22-.19.52-.5.99-.9,1.38-.42.42-.82.68-1.38.9-.42.17-1.06.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.59-.01-4.85-.07c-1.17-.06-1.8-.24-2.22-.41-.52-.19-.99-.5-1.38-.9-.4-.39-.71-.86-.9-1.38-.17-.42-.36-1.06-.41-2.22-.06-1.27-.07-1.64-.07-4.84s.01-3.58.07-4.84c.06-1.17.24-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68,1.38-.9.42-.17,1.06-.36,2.22-.41,1.09-.04,1.52-.06,3.76-.06,0-.01,0,0,0,0ZM18.43,4.16c-.8,0-1.45.64-1.45,1.44s.64,1.44,1.45,1.44h0c.8,0,1.45-.64,1.45-1.44s-.66-1.44-1.45-1.44ZM12.02,5.83c-3.4-.06-6.21,2.67-6.26,6.07-.06,3.4,2.67,6.21,6.07,6.26h.19c3.4-.06,6.13-2.86,6.07-6.26-.06-3.32-2.73-6.01-6.07-6.07ZM12.02,8c2.21,0,4,1.79,4,4s-1.79,4-4,4h0c-2.21,0-4-1.79-4-4s1.78-4,4-4Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12.02,0C8.75,0,8.34.01,7.06.07c-1.28.07-2.16.27-2.91.57-.8.3-1.52.78-2.12,1.39-.61.6-1.08,1.32-1.39,2.12-.3.76-.5,1.63-.57,2.9-.06,1.29-.07,1.7-.07,4.96s.01,3.67.07,4.94c.06,1.28.26,2.14.56,2.91.31.79.72,1.46,1.39,2.12s1.33,1.08,2.12,1.39c.77.3,1.63.5,2.91.56,1.29.07,1.7.08,4.96.08s3.67-.01,4.95-.07,2.16-.26,2.91-.56c.8-.3,1.52-.78,2.12-1.39.67-.67,1.08-1.33,1.39-2.12.3-.77.5-1.63.56-2.91s.07-1.69.07-4.94-.01-3.67-.07-4.94-.27-2.14-.56-2.91c-.3-.8-.78-1.52-1.39-2.12-.6-.61-1.32-1.09-2.12-1.39-.77-.3-1.63-.5-2.91-.56-1.27-.08-1.68-.09-4.94-.09h0ZM10.93,2.17h1.08c3.2,0,3.59.01,4.85.07,1.17.06,1.81.24,2.23.41.56.22.96.48,1.38.9.42.42.68.82.9,1.38.17.42.36,1.06.41,2.22.06,1.27.07,1.64.07,4.84s-.01,3.59-.07,4.84c-.06,1.17-.24,1.8-.41,2.22-.19.52-.5.99-.9,1.38-.42.42-.82.68-1.38.9-.42.17-1.06.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.59-.01-4.85-.07c-1.17-.06-1.8-.24-2.22-.41-.52-.19-.99-.5-1.38-.9-.4-.39-.71-.86-.9-1.38-.17-.42-.36-1.06-.41-2.22-.06-1.27-.07-1.64-.07-4.84s.01-3.58.07-4.84c.06-1.17.24-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68,1.38-.9.42-.17,1.06-.36,2.22-.41,1.09-.04,1.52-.06,3.76-.06,0-.01,0,0,0,0ZM18.43,4.16c-.8,0-1.45.64-1.45,1.44s.64,1.44,1.45,1.44h0c.8,0,1.45-.64,1.45-1.44s-.66-1.44-1.45-1.44ZM12.02,5.83c-3.4-.06-6.21,2.67-6.26,6.07-.06,3.4,2.67,6.21,6.07,6.26h.19c3.4-.06,6.13-2.86,6.07-6.26-.06-3.32-2.73-6.01-6.07-6.07ZM12.02,8c2.21,0,4,1.79,4,4s-1.79,4-4,4h0c-2.21,0-4-1.79-4-4s1.78-4,4-4Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M12.02,0C8.75,0,8.34.01,7.06.07c-1.28.07-2.16.27-2.91.57-.8.3-1.52.78-2.12,1.39-.61.6-1.08,1.32-1.39,2.12-.3.76-.5,1.63-.57,2.9-.06,1.29-.07,1.7-.07,4.96s.01,3.67.07,4.94c.06,1.28.26,2.14.56,2.91.31.79.72,1.46,1.39,2.12s1.33,1.08,2.12,1.39c.77.3,1.63.5,2.91.56,1.29.07,1.7.08,4.96.08s3.67-.01,4.95-.07,2.16-.26,2.91-.56c.8-.3,1.52-.78,2.12-1.39.67-.67,1.08-1.33,1.39-2.12.3-.77.5-1.63.56-2.91s.07-1.69.07-4.94-.01-3.67-.07-4.94-.27-2.14-.56-2.91c-.3-.8-.78-1.52-1.39-2.12-.6-.61-1.32-1.09-2.12-1.39-.77-.3-1.63-.5-2.91-.56-1.27-.08-1.68-.09-4.94-.09h0ZM10.93,2.17h1.08c3.2,0,3.59.01,4.85.07,1.17.06,1.81.24,2.23.41.56.22.96.48,1.38.9.42.42.68.82.9,1.38.17.42.36,1.06.41,2.22.06,1.27.07,1.64.07,4.84s-.01,3.59-.07,4.84c-.06,1.17-.24,1.8-.41,2.22-.19.52-.5.99-.9,1.38-.42.42-.82.68-1.38.9-.42.17-1.06.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.59-.01-4.85-.07c-1.17-.06-1.8-.24-2.22-.41-.52-.19-.99-.5-1.38-.9-.4-.39-.71-.86-.9-1.38-.17-.42-.36-1.06-.41-2.22-.06-1.27-.07-1.64-.07-4.84s.01-3.58.07-4.84c.06-1.17.24-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68,1.38-.9.42-.17,1.06-.36,2.22-.41,1.09-.04,1.52-.06,3.76-.06,0-.01,0,0,0,0ZM18.43,4.16c-.8,0-1.45.64-1.45,1.44s.64,1.44,1.45,1.44h0c.8,0,1.45-.64,1.45-1.44s-.66-1.44-1.45-1.44ZM12.02,5.83c-3.4-.06-6.21,2.67-6.26,6.07-.06,3.4,2.67,6.21,6.07,6.26h.19c3.4-.06,6.13-2.86,6.07-6.26-.06-3.32-2.73-6.01-6.07-6.07ZM12.02,8c2.21,0,4,1.79,4,4s-1.79,4-4,4h0c-2.21,0-4-1.79-4-4s1.78-4,4-4Z"/>
            </svg>`,
    },
    {
      name: 'linkedin',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M0,1.72C0,.77.79,0,1.77,0h20.47c.98,0,1.77.77,1.77,1.72v20.56c0,.94-.79,1.72-1.77,1.72H1.77c-.98-.01-1.77-.78-1.77-1.73V1.72ZM7.41,20.08v-10.82h-3.6v10.83h3.6s0-.01,0-.01ZM5.61,7.78c1.26,0,2.03-.83,2.03-1.87-.02-1.07-.78-1.87-2.01-1.87s-2.03.81-2.03,1.87.78,1.87,1.99,1.87h.02ZM12.97,20.08v-6.06c0-.32.02-.64.12-.88.26-.64.86-1.32,1.84-1.32,1.3,0,1.82.99,1.82,2.46v5.8h3.6v-6.21c0-3.33-1.78-4.88-4.14-4.88-1.91,0-2.77,1.04-3.24,1.79v.03h-.02s.01-.02.02-.03v-1.52h-3.59c.04,1.02,0,10.83,0,10.83h3.59s0-.01,0-.01Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0,1.72C0,.77.79,0,1.77,0h20.47c.98,0,1.77.77,1.77,1.72v20.56c0,.94-.79,1.72-1.77,1.72H1.77c-.98-.01-1.77-.78-1.77-1.73V1.72ZM7.41,20.08v-10.82h-3.6v10.83h3.6s0-.01,0-.01ZM5.61,7.78c1.26,0,2.03-.83,2.03-1.87-.02-1.07-.78-1.87-2.01-1.87s-2.03.81-2.03,1.87.78,1.87,1.99,1.87h.02ZM12.97,20.08v-6.06c0-.32.02-.64.12-.88.26-.64.86-1.32,1.84-1.32,1.3,0,1.82.99,1.82,2.46v5.8h3.6v-6.21c0-3.33-1.78-4.88-4.14-4.88-1.91,0-2.77,1.04-3.24,1.79v.03h-.02s.01-.02.02-.03v-1.52h-3.59c.04,1.02,0,10.83,0,10.83h3.59s0-.01,0-.01Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M0,1.72C0,.77.79,0,1.77,0h20.47c.98,0,1.77.77,1.77,1.72v20.56c0,.94-.79,1.72-1.77,1.72H1.77c-.98-.01-1.77-.78-1.77-1.73V1.72ZM7.41,20.08v-10.82h-3.6v10.83h3.6s0-.01,0-.01ZM5.61,7.78c1.26,0,2.03-.83,2.03-1.87-.02-1.07-.78-1.87-2.01-1.87s-2.03.81-2.03,1.87.78,1.87,1.99,1.87h.02ZM12.97,20.08v-6.06c0-.32.02-.64.12-.88.26-.64.86-1.32,1.84-1.32,1.3,0,1.82.99,1.82,2.46v5.8h3.6v-6.21c0-3.33-1.78-4.88-4.14-4.88-1.91,0-2.77,1.04-3.24,1.79v.03h-.02s.01-.02.02-.03v-1.52h-3.59c.04,1.02,0,10.83,0,10.83h3.59s0-.01,0-.01Z"/>
            </svg>`,
    },
    {
      name: 'lock',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeMiterlimit={10} className="size-6">
          <path d="M12 3.62a3.88 3.88 0 0 1 3.88 3.88v2.05H8.13V7.5A3.88 3.88 0 0 1 12 3.62Z" />
          <rect x="4.77" y="9.55" width="14.47" height="10.83" rx="2.95" ry="2.95" />
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-miterlimit="10">
              <path d="M12 3.62a3.88 3.88 0 0 1 3.88 3.88v2.05H8.13V7.5A3.88 3.88 0 0 1 12 3.62Z"/>
              <rect x="4.77" y="9.55" width="14.47" height="10.83" rx="2.95" ry="2.95"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeMiterlimit={10} className="size-6">
              <path d="M12 3.62a3.88 3.88 0 0 1 3.88 3.88v2.05H8.13V7.5A3.88 3.88 0 0 1 12 3.62Z" />
              <rect x="4.77" y="9.55" width="14.47" height="10.83" rx="2.95" ry="2.95" />
            </svg>`,
    },
    {
      name: 'log-out',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.06,6.57l5.43,5.43-5.43,5.43M20.49,12h-12.48M12,21.53h-5.99c-1.38,0-2.5-1.12-2.5-2.5V4.97c0-1.38,1.12-2.5,2.5-2.5h5.99"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.06,6.57l5.43,5.43-5.43,5.43M20.49,12h-12.48M12,21.53h-5.99c-1.38,0-2.5-1.12-2.5-2.5V4.97c0-1.38,1.12-2.5,2.5-2.5h5.99"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.06,6.57l5.43,5.43-5.43,5.43M20.49,12h-12.48M12,21.53h-5.99c-1.38,0-2.5-1.12-2.5-2.5V4.97c0-1.38,1.12-2.5,2.5-2.5h5.99"/>
            </svg>`,
    },
    {
      name: 'mail',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.5,6.88v10.23c0,1.21-.98,2.19-2.19,2.19H4.69c-1.21,0-2.19-.98-2.19-2.19V6.88M21.5,6.88c0-1.21-.98-2.19-2.19-2.19H4.69c-1.21,0-2.19.98-2.19,2.19M21.5,6.88v.24c0,.76-.4,1.47-1.04,1.87l-6.37,3.92c-1.28.79-2.89.79-4.17,0l-6.37-3.92c-.65-.4-1.04-1.1-1.04-1.87v-.24"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.5,6.88v10.23c0,1.21-.98,2.19-2.19,2.19H4.69c-1.21,0-2.19-.98-2.19-2.19V6.88M21.5,6.88c0-1.21-.98-2.19-2.19-2.19H4.69c-1.21,0-2.19.98-2.19,2.19M21.5,6.88v.24c0,.76-.4,1.47-1.04,1.87l-6.37,3.92c-1.28.79-2.89.79-4.17,0l-6.37-3.92c-.65-.4-1.04-1.1-1.04-1.87v-.24"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.5,6.88v10.23c0,1.21-.98,2.19-2.19,2.19H4.69c-1.21,0-2.19-.98-2.19-2.19V6.88M21.5,6.88c0-1.21-.98-2.19-2.19-2.19H4.69c-1.21,0-2.19.98-2.19,2.19M21.5,6.88v.24c0,.76-.4,1.47-1.04,1.87l-6.37,3.92c-1.28.79-2.89.79-4.17,0l-6.37-3.92c-.65-.4-1.04-1.1-1.04-1.87v-.24"/>
            </svg>`,
    },
    {
      name: 'mobile',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5,19.5h3M8.02,21.75h7.96c1.24,0,2.25-1.01,2.25-2.25V4.5c0-1.24-1.01-2.25-2.25-2.25h-7.96c-1.24,0-2.25,1.01-2.25,2.25v15c0,1.24,1.01,2.25,2.25,2.25Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5,19.5h3M8.02,21.75h7.96c1.24,0,2.25-1.01,2.25-2.25V4.5c0-1.24-1.01-2.25-2.25-2.25h-7.96c-1.24,0-2.25,1.01-2.25,2.25v15c0,1.24,1.01,2.25,2.25,2.25Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5,19.5h3M8.02,21.75h7.96c1.24,0,2.25-1.01,2.25-2.25V4.5c0-1.24-1.01-2.25-2.25-2.25h-7.96c-1.24,0-2.25,1.01-2.25,2.25v15c0,1.24,1.01,2.25,2.25,2.25Z"/>
            </svg>`,
    },
    {
      name: 'money',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.96,6.15v.73c0,.4-.33.73-.73.73h-.73M2.5,7.62v-.37c0-.61.49-1.1,1.1-1.1h16.44M2.5,7.62v8.77M20.04,6.15v.73c0,.4.33.73.73.73h.73M20.04,6.15h.37c.61,0,1.1.49,1.1,1.1v9.5c0,.61-.49,1.1-1.1,1.1h-.37M21.5,16.38h-.73c-.4,0-.73.33-.73.73v.73M20.04,17.85H3.96M3.96,17.85h-.37c-.61,0-1.1-.49-1.1-1.1h0v-.37M3.96,17.85v-.73c0-.4-.33-.73-.73-.73h-.73M14.92,12c0,1.61-1.31,2.92-2.92,2.92s-2.92-1.31-2.92-2.92,1.31-2.92,2.92-2.92,2.92,1.31,2.92,2.92ZM17.85,12h0s0,0,0,0h0ZM6.15,12h0s0,0,0,0h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.96,6.15v.73c0,.4-.33.73-.73.73h-.73M2.5,7.62v-.37c0-.61.49-1.1,1.1-1.1h16.44M2.5,7.62v8.77M20.04,6.15v.73c0,.4.33.73.73.73h.73M20.04,6.15h.37c.61,0,1.1.49,1.1,1.1v9.5c0,.61-.49,1.1-1.1,1.1h-.37M21.5,16.38h-.73c-.4,0-.73.33-.73.73v.73M20.04,17.85H3.96M3.96,17.85h-.37c-.61,0-1.1-.49-1.1-1.1h0v-.37M3.96,17.85v-.73c0-.4-.33-.73-.73-.73h-.73M14.92,12c0,1.61-1.31,2.92-2.92,2.92s-2.92-1.31-2.92-2.92,1.31-2.92,2.92-2.92,2.92,1.31,2.92,2.92ZM17.85,12h0s0,0,0,0h0ZM6.15,12h0s0,0,0,0h0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.96,6.15v.73c0,.4-.33.73-.73.73h-.73M2.5,7.62v-.37c0-.61.49-1.1,1.1-1.1h16.44M2.5,7.62v8.77M20.04,6.15v.73c0,.4.33.73.73.73h.73M20.04,6.15h.37c.61,0,1.1.49,1.1,1.1v9.5c0,.61-.49,1.1-1.1,1.1h-.37M21.5,16.38h-.73c-.4,0-.73.33-.73.73v.73M20.04,17.85H3.96M3.96,17.85h-.37c-.61,0-1.1-.49-1.1-1.1h0v-.37M3.96,17.85v-.73c0-.4-.33-.73-.73-.73h-.73M14.92,12c0,1.61-1.31,2.92-2.92,2.92s-2.92-1.31-2.92-2.92,1.31-2.92,2.92-2.92,2.92,1.31,2.92,2.92ZM17.85,12h0s0,0,0,0h0ZM6.15,12h0s0,0,0,0h0Z"/>
            </svg>`,
    },
    {
      name: 'money-2',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12,6v12M9,15.18l.88.66c1.17.88,3.07.88,4.24,0,1.17-.88,1.17-2.3,0-3.18-.59-.44-1.35-.66-2.12-.66-.73,0-1.45-.22-2-.66-1.11-.88-1.11-2.3,0-3.18s2.9-.88,4.01,0l.41.33M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12,6v12M9,15.18l.88.66c1.17.88,3.07.88,4.24,0,1.17-.88,1.17-2.3,0-3.18-.59-.44-1.35-.66-2.12-.66-.73,0-1.45-.22-2-.66-1.11-.88-1.11-2.3,0-3.18s2.9-.88,4.01,0l.41.33M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12,6v12M9,15.18l.88.66c1.17.88,3.07.88,4.24,0,1.17-.88,1.17-2.3,0-3.18-.59-.44-1.35-.66-2.12-.66-.73,0-1.45-.22-2-.66-1.11-.88-1.11-2.3,0-3.18s2.9-.88,4.01,0l.41.33M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
            </svg>`,
    },
    {
      name: 'moon-dark',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.5,15.42c-1.2.5-2.5.76-3.8.76-5.46,0-9.88-4.42-9.88-9.88,0-1.35.27-2.63.76-3.8-3.68,1.54-6.08,5.13-6.08,9.12,0,5.46,4.42,9.88,9.88,9.88,3.99,0,7.59-2.4,9.12-6.08Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.5,15.42c-1.2.5-2.5.76-3.8.76-5.46,0-9.88-4.42-9.88-9.88,0-1.35.27-2.63.76-3.8-3.68,1.54-6.08,5.13-6.08,9.12,0,5.46,4.42,9.88,9.88,9.88,3.99,0,7.59-2.4,9.12-6.08Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.5,15.42c-1.2.5-2.5.76-3.8.76-5.46,0-9.88-4.42-9.88-9.88,0-1.35.27-2.63.76-3.8-3.68,1.54-6.08,5.13-6.08,9.12,0,5.46,4.42,9.88,9.88,9.88,3.99,0,7.59-2.4,9.12-6.08Z"/>
            </svg>`,
    },
    {
      name: 'notes',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeMiterlimit={10} className="size-6">
          <path d="M12 3.74H7.57a3.83 3.83 0 0 0-3.83 3.83v8.87a3.83 3.83 0 0 0 3.83 3.83h8.87a3.83 3.83 0 0 0 3.83-3.83v-4.43" />
          <path d="M19.51 7.53l-7.36 7.36-3.24.2.2-3.24 7.36-7.36c.84-.84 2.2-.84 3.04 0 .84.84.84 2.2 0 3.04Z" />
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-miterlimit="10">
              <path d="M12 3.74H7.57a3.83 3.83 0 0 0-3.83 3.83v8.87a3.83 3.83 0 0 0 3.83 3.83h8.87a3.83 3.83 0 0 0 3.83-3.83v-4.43"/>
              <path d="M19.51 7.53l-7.36 7.36-3.24.2.2-3.24 7.36-7.36c.84-.84 2.2-.84 3.04 0 .84.84.84 2.2 0 3.04Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeMiterlimit={10} className="size-6">
              <path d="M12 3.74H7.57a3.83 3.83 0 0 0-3.83 3.83v8.87a3.83 3.83 0 0 0 3.83 3.83h8.87a3.83 3.83 0 0 0 3.83-3.83v-4.43" />
              <path d="M19.51 7.53l-7.36 7.36-3.24.2.2-3.24 7.36-7.36c.84-.84 2.2-.84 3.04 0 .84.84.84 2.2 0 3.04Z" />
            </svg>`,
    },
    {
      name: 'notifications-bell',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.29,17.4v-1.03c-2.43-.5-2.24-1.86-2.24-1.86v-4.87c0-3.34-2.71-6.05-6.05-6.05-3.34,0-6.05,2.71-6.05,6.05v4.87s.19,1.36-2.24,1.86v1.03h16.58ZM15.01,17.4c0,1.66-1.35,3.01-3.01,3.01s-3.01-1.35-3.01-3.01"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.29,17.4v-1.03c-2.43-.5-2.24-1.86-2.24-1.86v-4.87c0-3.34-2.71-6.05-6.05-6.05-3.34,0-6.05,2.71-6.05,6.05v4.87s.19,1.36-2.24,1.86v1.03h16.58ZM15.01,17.4c0,1.66-1.35,3.01-3.01,3.01s-3.01-1.35-3.01-3.01"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.29,17.4v-1.03c-2.43-.5-2.24-1.86-2.24-1.86v-4.87c0-3.34-2.71-6.05-6.05-6.05-3.34,0-6.05,2.71-6.05,6.05v4.87s.19,1.36-2.24,1.86v1.03h16.58ZM15.01,17.4c0,1.66-1.35,3.01-3.01,3.01s-3.01-1.35-3.01-3.01"/>
            </svg>`,
    },
    {
      name: 'office',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4,20.73h16M4.73,3.27h14.55M5.45,3.27v17.45M18.55,3.27v17.45M9.09,6.91h1.45M9.09,9.82h1.45M9.09,12.73h1.45M13.45,6.91h1.45M13.45,9.82h1.45M13.45,12.73h1.45M9.09,20.73v-4.36h5.82v4.36"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4,20.73h16M4.73,3.27h14.55M5.45,3.27v17.45M18.55,3.27v17.45M9.09,6.91h1.45M9.09,9.82h1.45M9.09,12.73h1.45M13.45,6.91h1.45M13.45,9.82h1.45M13.45,12.73h1.45M9.09,20.73v-4.36h5.82v4.36"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4,20.73h16M4.73,3.27h14.55M5.45,3.27v17.45M18.55,3.27v17.45M9.09,6.91h1.45M9.09,9.82h1.45M9.09,12.73h1.45M13.45,6.91h1.45M13.45,9.82h1.45M13.45,12.73h1.45M9.09,20.73v-4.36h5.82v4.36"/>
            </svg>`,
    },
    {
      name: 'open-new',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.42,3.27h6.31v6.31M20.73,3.27l-11.67,11.67M12.08,5.38h-6.2c-1.44,0-2.61,1.17-2.61,2.61v10.13c0,1.44,1.17,2.61,2.61,2.61h10.13c1.44,0,2.61-1.17,2.61-2.61v-6.2"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.42,3.27h6.31v6.31M20.73,3.27l-11.67,11.67M12.08,5.38h-6.2c-1.44,0-2.61,1.17-2.61,2.61v10.13c0,1.44,1.17,2.61,2.61,2.61h10.13c1.44,0,2.61-1.17,2.61-2.61v-6.2"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.42,3.27h6.31v6.31M20.73,3.27l-11.67,11.67M12.08,5.38h-6.2c-1.44,0-2.61,1.17-2.61,2.61v10.13c0,1.44,1.17,2.61,2.61,2.61h10.13c1.44,0,2.61-1.17,2.61-2.61v-6.2"/>
            </svg>`,
    },
    {
      name: 'outbound',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.72,5.78H5.47c-1.24,0-2.25,1.01-2.25,2.25v10.5c0,1.24,1.01,2.25,2.25,2.25h10.5c1.24,0,2.25-1.01,2.25-2.25v-8.25M9.79,14.21L20.78,3.22M20.78,3.22h-5.25M20.78,3.22v5.25"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.72,5.78H5.47c-1.24,0-2.25,1.01-2.25,2.25v10.5c0,1.24,1.01,2.25,2.25,2.25h10.5c1.24,0,2.25-1.01,2.25-2.25v-8.25M9.79,14.21L20.78,3.22M20.78,3.22h-5.25M20.78,3.22v5.25"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.72,5.78H5.47c-1.24,0-2.25,1.01-2.25,2.25v10.5c0,1.24,1.01,2.25,2.25,2.25h10.5c1.24,0,2.25-1.01,2.25-2.25v-8.25M9.79,14.21L20.78,3.22M20.78,3.22h-5.25M20.78,3.22v5.25"/>
            </svg>`,
    },
    {
      name: 'pause',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75,5.25v13.5M8.25,5.25v13.5"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75,5.25v13.5M8.25,5.25v13.5"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75,5.25v13.5M8.25,5.25v13.5"/>
            </svg>`,
    },
    {
      name: 'pause-circle',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.62,8.5v7M9.38,15.5v-7M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.62,8.5v7M9.38,15.5v-7M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.62,8.5v7M9.38,15.5v-7M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
            </svg>`,
    },
    {
      name: 'plus',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98,12h16.04M12,3.98v16.04"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.98,12h16.04M12,3.98v16.04"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98,12h16.04M12,3.98v16.04"/>
            </svg>`,
    },
    {
      name: 'plus-circle',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm-4 9h8m-4-4v8"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm-4 9h8m-4-4v8"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm-4 9h8m-4-4v8"/>
            </svg>`,
    },
    {
      name: 'play',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5,5.1c0-.93,1-1.52,1.81-1.07l12.55,6.9c.59.33.81,1.07.48,1.66-.11.2-.28.37-.48.48l-12.55,6.9c-.59.33-1.34.11-1.66-.48-.1-.18-.15-.38-.15-.59,0,0,0-13.81,0-13.81Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5,5.1c0-.93,1-1.52,1.81-1.07l12.55,6.9c.59.33.81,1.07.48,1.66-.11.2-.28.37-.48.48l-12.55,6.9c-.59.33-1.34.11-1.66-.48-.1-.18-.15-.38-.15-.59,0,0,0-13.81,0-13.81Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5,5.1c0-.93,1-1.52,1.81-1.07l12.55,6.9c.59.33.81,1.07.48,1.66-.11.2-.28.37-.48.48l-12.55,6.9c-.59.33-1.34.11-1.66-.48-.1-.18-.15-.38-.15-.59,0,0,0-13.81,0-13.81Z"/>
            </svg>`,
    },
    {
      name: 'play-circle',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.21,11.64c.2.11.27.36.16.56-.04.07-.09.12-.16.16l-6.17,3.43c-.2.11-.45.04-.56-.16-.03-.06-.05-.13-.05-.2v-6.86c0-.32.34-.51.61-.36,0,0,6.17,3.43,6.17,3.43Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.21,11.64c.2.11.27.36.16.56-.04.07-.09.12-.16.16l-6.17,3.43c-.2.11-.45.04-.56-.16-.03-.06-.05-.13-.05-.2v-6.86c0-.32.34-.51.61-.36,0,0,6.17,3.43,6.17,3.43Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.21,11.64c.2.11.27.36.16.56-.04.07-.09.12-.16.16l-6.17,3.43c-.2.11-.45.04-.56-.16-.03-.06-.05-.13-.05-.2v-6.86c0-.32.34-.51.61-.36,0,0,6.17,3.43,6.17,3.43Z"/>
            </svg>`,
    },
    {
      name: 'play-pause',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21,6.75v10.5M15.54,6.75v10.5M3,16.06V7.94c0-.86.93-1.41,1.68-.98l7.11,4.06c.54.31.73,1,.42,1.53-.1.17-.24.32-.42.42l-7.11,4.06c-.54.31-1.23.12-1.53-.42-.1-.17-.15-.36-.15-.56Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21,6.75v10.5M15.54,6.75v10.5M3,16.06V7.94c0-.86.93-1.41,1.68-.98l7.11,4.06c.54.31.73,1,.42,1.53-.1.17-.24.32-.42.42l-7.11,4.06c-.54.31-1.23.12-1.53-.42-.1-.17-.15-.36-.15-.56Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21,6.75v10.5M15.54,6.75v10.5M3,16.06V7.94c0-.86.93-1.41,1.68-.98l7.11,4.06c.54.31.73,1,.42,1.53-.1.17-.24.32-.42.42l-7.11,4.06c-.54.31-1.23.12-1.53-.42-.1-.17-.15-.36-.15-.56Z"/>
            </svg>`,
    },
    {
      name: 'refresh',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.43,3.99L20.43,9.12L15.3,9.12M20.43,9.12l-2.77-2.77h0c-1.45-1.45-3.45-2.35-5.66-2.35-4.42,0-8,3.58-8,8s3.58,8,8,8c3.97,0,7.26-2.9,7.88-6.69"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.43,3.99L20.43,9.12L15.3,9.12M20.43,9.12l-2.77-2.77h0c-1.45-1.45-3.45-2.35-5.66-2.35-4.42,0-8,3.58-8,8s3.58,8,8,8c3.97,0,7.26-2.9,7.88-6.69"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.43,3.99L20.43,9.12L15.3,9.12M20.43,9.12l-2.77-2.77h0c-1.45-1.45-3.45-2.35-5.66-2.35-4.42,0-8,3.58-8,8s3.58,8,8,8c3.97,0,7.26-2.9,7.88-6.69"/>
            </svg>`,
    },
    {
      name: 'renew',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.43,3.99L20.43,9.12L15.3,9.12M20.43,9.12l-2.77-2.77h0c-1.45-1.45-3.45-2.35-5.66-2.35-4.26,0-7.74,3.34-7.98,7.55M3.57,20.01L3.57,14.88L8.7,14.88M3.57,14.88l2.77,2.77h0c1.45,1.45,3.45,2.35,5.66,2.35,4.26,0,7.74-3.34,7.98-7.55"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.43,3.99L20.43,9.12L15.3,9.12M20.43,9.12l-2.77-2.77h0c-1.45-1.45-3.45-2.35-5.66-2.35-4.26,0-7.74,3.34-7.98,7.55M3.57,20.01L3.57,14.88L8.7,14.88M3.57,14.88l2.77,2.77h0c1.45,1.45,3.45,2.35,5.66,2.35,4.26,0,7.74-3.34,7.98-7.55"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.43,3.99L20.43,9.12L15.3,9.12M20.43,9.12l-2.77-2.77h0c-1.45-1.45-3.45-2.35-5.66-2.35-4.26,0-7.74,3.34-7.98,7.55M3.57,20.01L3.57,14.88L8.7,14.88M3.57,14.88l2.77,2.77h0c1.45,1.45,3.45,2.35,5.66,2.35,4.26,0,7.74-3.34,7.98-7.55"/>
            </svg>`,
    },
    {
      name: 'rocket-launch',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.62,10.98c2.3-2.3,2.44-5.03,2.37-6.25-.01-.19-.09-.36-.22-.49-.13-.13-.31-.21-.49-.22-1.22-.07-3.95.07-6.25,2.37l-5.06,5.06,4.6,4.6,5.06-5.06Z M13.33,6.08h-5.9c-.2,0-.4.08-.54.22l-2.66,2.66c-.1.1-.17.23-.2.37-.03.14-.03.28.02.42.05.13.13.25.24.35.11.09.24.15.38.17l3.31,1.18 M17.92,10.67v5.9c0,.2-.08.4-.22.54l-2.66,2.66c-.1.1-.23.17-.37.2-.14.03-.28.03-.42-.02-.13-.05-.25-.13-.35-.24s-.15-.24-.17-.38l-1.18-3.31 M9.72,16.8c-.31.68-1.24,2.13-3.68,2.57-.84.15-1.57-.57-1.42-1.42.44-2.43,1.88-3.36,2.57-3.68"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.62,10.98c2.3-2.3,2.44-5.03,2.37-6.25-.01-.19-.09-.36-.22-.49-.13-.13-.31-.21-.49-.22-1.22-.07-3.95.07-6.25,2.37l-5.06,5.06,4.6,4.6,5.06-5.06Z M13.33,6.08h-5.9c-.2,0-.4.08-.54.22l-2.66,2.66c-.1.1-.17.23-.2.37-.03.14-.03.28.02.42.05.13.13.25.24.35.11.09.24.15.38.17l3.31,1.18 M17.92,10.67v5.9c0,.2-.08.4-.22.54l-2.66,2.66c-.1.1-.23.17-.37.2-.14.03-.28.03-.42-.02-.13-.05-.25-.13-.35-.24s-.15-.24-.17-.38l-1.18-3.31 M9.72,16.8c-.31.68-1.24,2.13-3.68,2.57-.84.15-1.57-.57-1.42-1.42.44-2.43,1.88-3.36,2.57-3.68"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.62,10.98c2.3-2.3,2.44-5.03,2.37-6.25-.01-.19-.09-.36-.22-.49-.13-.13-.31-.21-.49-.22-1.22-.07-3.95.07-6.25,2.37l-5.06,5.06,4.6,4.6,5.06-5.06Z M13.33,6.08h-5.9c-.2,0-.4.08-.54.22l-2.66,2.66c-.1.1-.17.23-.2.37-.03.14-.03.28.02.42.05.13.13.25.24.35.11.09.24.15.38.17l3.31,1.18 M17.92,10.67v5.9c0,.2-.08.4-.22.54l-2.66,2.66c-.1.1-.23.17-.37.2-.14.03-.28.03-.42-.02-.13-.05-.25-.13-.35-.24s-.15-.24-.17-.38l-1.18-3.31 M9.72,16.8c-.31.68-1.24,2.13-3.68,2.57-.84.15-1.57-.57-1.42-1.42.44-2.43,1.88-3.36,2.57-3.68"/>
            </svg>`,
    },
    {
      name: 'search',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.42 5.1c3.12 3.12 3.12 8.19 0 11.31-1.56 1.57-3.61 2.34-5.66 2.34s-4.1-.78-5.66-2.34c-3.12-3.12-3.12-8.19 0-11.31s8.19-3.12 11.31 0ZM21.27 21.27l-4.85-4.85"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.42 5.1c3.12 3.12 3.12 8.19 0 11.31-1.56 1.57-3.61 2.34-5.66 2.34s-4.1-.78-5.66-2.34c-3.12-3.12-3.12-8.19 0-11.31s8.19-3.12 11.31 0ZM21.27 21.27l-4.85-4.85"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.42 5.1c3.12 3.12 3.12 8.19 0 11.31-1.56 1.57-3.61 2.34-5.66 2.34s-4.1-.78-5.66-2.34c-3.12-3.12-3.12-8.19 0-11.31s8.19-3.12 11.31 0ZM21.27 21.27l-4.85-4.85"/>
            </svg>`,
    },
    {
      name: 'settings-gear',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.59,3.94c.09-.54.56-.94,1.11-.94h2.59c.55,0,1.02.4,1.11.94l.21,1.28c.06.37.31.69.65.87.07.04.15.08.22.13.32.2.72.26,1.07.12l1.22-.46c.52-.19,1.09.01,1.37.49l1.3,2.25c.27.48.16,1.08-.26,1.43l-1,.83c-.29.24-.44.61-.43.99,0,.08,0,.17,0,.26,0,.38.14.75.43.99l1,.83c.42.35.53.95.26,1.43l-1.3,2.25c-.27.48-.85.68-1.37.49l-1.22-.46c-.35-.13-.75-.07-1.08.12-.07.04-.15.09-.22.13-.33.18-.58.5-.64.87l-.21,1.28c-.09.54-.56.94-1.11.94h-2.59c-.55,0-1.02-.4-1.11-.94l-.21-1.28c-.06-.37-.31-.69-.64-.87-.07-.04-.15-.08-.22-.13-.32-.2-.72-.26-1.08-.12l-1.22.46c-.51.19-1.09-.01-1.37-.49l-1.3-2.25c-.27-.48-.16-1.08.26-1.43l1-.83c.29-.24.44-.61.43-.99,0-.08,0-.17,0-.26,0-.38-.14-.75-.43-.99l-1-.83c-.42-.35-.53-.95-.26-1.43l1.3-2.25c.28-.48.85-.68,1.37-.49l1.22.46c.36.13.75.07,1.08-.12.07-.04.15-.09.22-.13.33-.18.58-.49.64-.87l.21-1.28h0Z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15,12c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3,3,1.34,3,3Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.59,3.94c.09-.54.56-.94,1.11-.94h2.59c.55,0,1.02.4,1.11.94l.21,1.28c.06.37.31.69.65.87.07.04.15.08.22.13.32.2.72.26,1.07.12l1.22-.46c.52-.19,1.09.01,1.37.49l1.3,2.25c.27.48.16,1.08-.26,1.43l-1,.83c-.29.24-.44.61-.43.99,0,.08,0,.17,0,.26,0,.38.14.75.43.99l1,.83c.42.35.53.95.26,1.43l-1.3,2.25c-.27.48-.85.68-1.37.49l-1.22-.46c-.35-.13-.75-.07-1.08.12-.07.04-.15.09-.22.13-.33.18-.58.5-.64.87l-.21,1.28c-.09.54-.56.94-1.11.94h-2.59c-.55,0-1.02-.4-1.11-.94l-.21-1.28c-.06-.37-.31-.69-.64-.87-.07-.04-.15-.08-.22-.13-.32-.2-.72-.26-1.08-.12l-1.22.46c-.51.19-1.09-.01-1.37-.49l-1.3-2.25c-.27-.48-.16-1.08.26-1.43l1-.83c.29-.24.44-.61.43-.99,0-.08,0-.17,0-.26,0-.38-.14-.75-.43-.99l-1-.83c-.42-.35-.53-.95-.26-1.43l1.3-2.25c.28-.48.85-.68,1.37-.49l1.22.46c.36.13.75.07,1.08-.12.07-.04.15-.09.22-.13.33-.18.58-.49.64-.87l.21-1.28h0Z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15,12c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3,3,1.34,3,3Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.59,3.94c.09-.54.56-.94,1.11-.94h2.59c.55,0,1.02.4,1.11.94l.21,1.28c.06.37.31.69.65.87.07.04.15.08.22.13.32.2.72.26,1.07.12l1.22-.46c.52-.19,1.09.01,1.37.49l1.3,2.25c.27.48.16,1.08-.26,1.43l-1,.83c-.29.24-.44.61-.43.99,0,.08,0,.17,0,.26,0,.38.14.75.43.99l1,.83c.42.35.53.95.26,1.43l-1.3,2.25c-.27.48-.85.68-1.37.49l-1.22-.46c-.35-.13-.75-.07-1.08.12-.07.04-.15.09-.22.13-.33.18-.58.5-.64.87l-.21,1.28c-.09.54-.56.94-1.11.94h-2.59c-.55,0-1.02-.4-1.11-.94l-.21-1.28c-.06-.37-.31-.69-.64-.87-.07-.04-.15-.08-.22-.13-.32-.2-.72-.26-1.08-.12l-1.22.46c-.51.19-1.09-.01-1.37-.49l-1.3-2.25c-.27-.48-.16-1.08.26-1.43l1-.83c.29-.24.44-.61.43-.99,0-.08,0-.17,0-.26,0-.38-.14-.75-.43-.99l-1-.83c-.42-.35-.53-.95-.26-1.43l1.3-2.25c.28-.48.85-.68,1.37-.49l1.22.46c.36.13.75.07,1.08-.12.07-.04.15-.09.22-.13.33-.18.58-.49.64-.87l.21-1.28h0Z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15,12c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3,3,1.34,3,3Z"/>
            </svg>`,
    },
    {
      name: 'stop',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.5,7.67c0-1.2.97-2.17,2.17-2.17h8.67c1.2,0,2.17.97,2.17,2.17v8.67c0,1.2-.97,2.17-2.17,2.17H7.67c-1.2,0-2.17-.97-2.17-2.17h0V7.67Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.5,7.67c0-1.2.97-2.17,2.17-2.17h8.67c1.2,0,2.17.97,2.17,2.17v8.67c0,1.2-.97,2.17-2.17,2.17H7.67c-1.2,0-2.17-.97-2.17-2.17h0V7.67Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.5,7.67c0-1.2.97-2.17,2.17-2.17h8.67c1.2,0,2.17.97,2.17,2.17v8.67c0,1.2-.97,2.17-2.17,2.17H7.67c-1.2,0-2.17-.97-2.17-2.17h0V7.67Z"/>
            </svg>`,
    },
    {
      name: 'stop-circle',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.5,9.16c0-.36.29-.66.66-.66h5.69c.36,0,.66.29.66.66v5.69c0,.36-.29.66-.66.66h-5.69c-.36,0-.66-.29-.66-.65,0,0,0,0,0,0v-5.69h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.5,9.16c0-.36.29-.66.66-.66h5.69c.36,0,.66.29.66.66v5.69c0,.36-.29.66-.66.66h-5.69c-.36,0-.66-.29-.66-.65,0,0,0,0,0,0v-5.69h0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3s9,4.03,9,9Z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.5,9.16c0-.36.29-.66.66-.66h5.69c.36,0,.66.29.66.66v5.69c0,.36-.29.66-.66.66h-5.69c-.36,0-.66-.29-.66-.65,0,0,0,0,0,0v-5.69h0Z"/>
            </svg>`,
    },
    {
      name: 'sun-light',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12,3v2.25M18.36,5.64l-1.59,1.59M21,12h-2.25M18.36,18.36l-1.59-1.59M12,18.75v2.25M7.23,16.77l-1.59,1.59M5.25,12h-2.25M7.23,7.23l-1.59-1.59M16.5,12c0,2.49-2.01,4.5-4.5,4.5s-4.5-2.01-4.5-4.5,2.01-4.5,4.5-4.5,4.5,2.01,4.5,4.5Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12,3v2.25M18.36,5.64l-1.59,1.59M21,12h-2.25M18.36,18.36l-1.59-1.59M12,18.75v2.25M7.23,16.77l-1.59,1.59M5.25,12h-2.25M7.23,7.23l-1.59-1.59M16.5,12c0,2.49-2.01,4.5-4.5,4.5s-4.5-2.01-4.5-4.5,2.01-4.5,4.5-4.5,4.5,2.01,4.5,4.5Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12,3v2.25M18.36,5.64l-1.59,1.59M21,12h-2.25M18.36,18.36l-1.59-1.59M12,18.75v2.25M7.23,16.77l-1.59,1.59M5.25,12h-2.25M7.23,7.23l-1.59-1.59M16.5,12c0,2.49-2.01,4.5-4.5,4.5s-4.5-2.01-4.5-4.5,2.01-4.5,4.5-4.5,4.5,2.01,4.5,4.5Z"/>
            </svg>`,
    },
    {
      name: 'tablet',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.99,19.5h4.02M6.41,21.75h11.17c1.24,0,2.25-1.01,2.25-2.25V4.5c0-1.24-1.01-2.25-2.25-2.25H6.41c-1.24,0-2.25,1.01-2.25,2.25v15c0,1.24,1.01,2.25,2.25,2.25Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.99,19.5h4.02M6.41,21.75h11.17c1.24,0,2.25-1.01,2.25-2.25V4.5c0-1.24-1.01-2.25-2.25-2.25H6.41c-1.24,0-2.25,1.01-2.25,2.25v15c0,1.24,1.01,2.25,2.25,2.25Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.99,19.5h4.02M6.41,21.75h11.17c1.24,0,2.25-1.01,2.25-2.25V4.5c0-1.24-1.01-2.25-2.25-2.25H6.41c-1.24,0-2.25,1.01-2.25,2.25v15c0,1.24,1.01,2.25,2.25,2.25Z"/>
            </svg>`,
    },
    {
      name: 'trash',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 7.4l.84 10.88c.09 1.17 1.07 2.08 2.24 2.08h7.83c1.18 0 2.15-.9 2.24-2.08l.84-10.88H5ZM3.03 7.4 20.97 7.4M10.07 10.55 10.07 17.21M13.93 10.55 13.93 17.21M12 7.4h5.78s-.46-1.43-.46-1.43c-.33-1.01-1.17-1.77-2.2-2h0c-2.05-.45-4.17-.45-6.22 0h0c-1.04.23-1.88.99-2.2 2l-.46 1.43s5.78 0 5.78 0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 7.4l.84 10.88c.09 1.17 1.07 2.08 2.24 2.08h7.83c1.18 0 2.15-.9 2.24-2.08l.84-10.88H5ZM3.03 7.4 20.97 7.4M10.07 10.55 10.07 17.21M13.93 10.55 13.93 17.21M12 7.4h5.78s-.46-1.43-.46-1.43c-.33-1.01-1.17-1.77-2.2-2h0c-2.05-.45-4.17-.45-6.22 0h0c-1.04.23-1.88.99-2.2 2l-.46 1.43s5.78 0 5.78 0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 7.4l.84 10.88c.09 1.17 1.07 2.08 2.24 2.08h7.83c1.18 0 2.15-.9 2.24-2.08l.84-10.88H5ZM3.03 7.4 20.97 7.4M10.07 10.55 10.07 17.21M13.93 10.55 13.93 17.21M12 7.4h5.78s-.46-1.43-.46-1.43c-.33-1.01-1.17-1.77-2.2-2h0c-2.05-.45-4.17-.45-6.22 0h0c-1.04.23-1.88.99-2.2 2l-.46 1.43s5.78 0 5.78 0Z"/>
            </svg>`,
    },
    {
      name: 'upload',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.57,8.94l5.43-5.43,5.43,5.43M12,3.51v12.48M21.53,15.75v2.24c0,1.38-1.12,2.5-2.5,2.5H4.97c-1.38,0-2.5-1.12-2.5-2.5v-2.24"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.57,8.94l5.43-5.43,5.43,5.43M12,3.51v12.48M21.53,15.75v2.24c0,1.38-1.12,2.5-2.5,2.5H4.97c-1.38,0-2.5-1.12-2.5-2.5v-2.24"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.57,8.94l5.43-5.43,5.43,5.43M12,3.51v12.48M21.53,15.75v2.24c0,1.38-1.12,2.5-2.5,2.5H4.97c-1.38,0-2.5-1.12-2.5-2.5v-2.24"/>
            </svg>`,
    },
    {
      name: 'user',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <circle cx="12" cy="9.57" r="5.09" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.82,19.52c-1.43-2.88-4.38-4.87-7.82-4.87s-6.39,1.99-7.82,4.87"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <circle cx="12" cy="9.57" r="5.09"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.82,19.52c-1.43-2.88-4.38-4.87-7.82-4.87s-6.39,1.99-7.82,4.87"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <circle cx="12" cy="9.57" r="5.09" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.82,19.52c-1.43-2.88-4.38-4.87-7.82-4.87s-6.39,1.99-7.82,4.87"/>
            </svg>`,
    },
    {
      name: 'user-2',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75,6.37c0,2.07-1.68,3.75-3.75,3.75s-3.75-1.68-3.75-3.75,1.68-3.75,3.75-3.75,3.75,1.68,3.75,3.75ZM4.5,19.75c.07-4.14,3.48-7.44,7.62-7.38,4.05.07,7.31,3.33,7.38,7.38-2.35,1.08-4.91,1.64-7.5,1.63-2.68,0-5.22-.58-7.5-1.63Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75,6.37c0,2.07-1.68,3.75-3.75,3.75s-3.75-1.68-3.75-3.75,1.68-3.75,3.75-3.75,3.75,1.68,3.75,3.75ZM4.5,19.75c.07-4.14,3.48-7.44,7.62-7.38,4.05.07,7.31,3.33,7.38,7.38-2.35,1.08-4.91,1.64-7.5,1.63-2.68,0-5.22-.58-7.5-1.63Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75,6.37c0,2.07-1.68,3.75-3.75,3.75s-3.75-1.68-3.75-3.75,1.68-3.75,3.75-3.75,3.75,1.68,3.75,3.75ZM4.5,19.75c.07-4.14,3.48-7.44,7.62-7.38,4.05.07,7.31,3.33,7.38,7.38-2.35,1.08-4.91,1.64-7.5,1.63-2.68,0-5.22-.58-7.5-1.63Z"/>
            </svg>`,
    },
    {
      name: 'user-circle',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.98,17.99c-1.42-1.88-3.63-2.98-5.98-2.98-2.35,0-4.57,1.1-5.98,2.98"/>
          <circle cx="12" cy="9.56" r="3" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.98,17.99c-1.42-1.88-3.63-2.98-5.98-2.98-2.35,0-4.57,1.1-5.98,2.98"/>
              <circle cx="12" cy="9.56" r="3"/>
              <circle cx="12" cy="12" r="9"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.98,17.99c-1.42-1.88-3.63-2.98-5.98-2.98-2.35,0-4.57,1.1-5.98,2.98"/>
              <circle cx="12" cy="9.56" r="3" />
              <circle cx="12" cy="12" r="9" />
            </svg>`,
    },
    {
      name: 'user-group',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18,18.07c1.27.1,2.54-.06,3.74-.48.13-1.65-1.1-3.1-2.75-3.23-.68-.06-1.37.13-1.93.51M18,18.07v.03c0,.23-.01.45-.04.67-1.81,1.04-3.87,1.59-5.96,1.58-2.17,0-4.21-.58-5.96-1.58-.03-.23-.04-.46-.04-.7M18,18.07c0-1.13-.33-2.24-.94-3.2M17.06,14.87c-1.1-1.73-3.01-2.77-5.06-2.77-2.05,0-3.96,1.04-5.06,2.77M6.94,14.87c-1.37-.93-3.24-.58-4.17.79-.39.57-.57,1.25-.51,1.93,1.2.42,2.47.58,3.74.48M6.94,14.87c-.61.95-.94,2.06-.94,3.2M15,6.65c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3,3,1.34,3,3ZM21,9.65c0,1.24-1.01,2.25-2.25,2.25s-2.25-1.01-2.25-2.25,1.01-2.25,2.25-2.25,2.25,1.01,2.25,2.25ZM7.5,9.65c0,1.24-1.01,2.25-2.25,2.25s-2.25-1.01-2.25-2.25,1.01-2.25,2.25-2.25,2.25,1.01,2.25,2.25Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18,18.07c1.27.1,2.54-.06,3.74-.48.13-1.65-1.1-3.1-2.75-3.23-.68-.06-1.37.13-1.93.51M18,18.07v.03c0,.23-.01.45-.04.67-1.81,1.04-3.87,1.59-5.96,1.58-2.17,0-4.21-.58-5.96-1.58-.03-.23-.04-.46-.04-.7M18,18.07c0-1.13-.33-2.24-.94-3.2M17.06,14.87c-1.1-1.73-3.01-2.77-5.06-2.77-2.05,0-3.96,1.04-5.06,2.77M6.94,14.87c-1.37-.93-3.24-.58-4.17.79-.39.57-.57,1.25-.51,1.93,1.2.42,2.47.58,3.74.48M6.94,14.87c-.61.95-.94,2.06-.94,3.2M15,6.65c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3,3,1.34,3,3ZM21,9.65c0,1.24-1.01,2.25-2.25,2.25s-2.25-1.01-2.25-2.25,1.01-2.25,2.25-2.25,2.25,1.01,2.25,2.25ZM7.5,9.65c0,1.24-1.01,2.25-2.25,2.25s-2.25-1.01-2.25-2.25,1.01-2.25,2.25-2.25,2.25,1.01,2.25,2.25Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18,18.07c1.27.1,2.54-.06,3.74-.48.13-1.65-1.1-3.1-2.75-3.23-.68-.06-1.37.13-1.93.51M18,18.07v.03c0,.23-.01.45-.04.67-1.81,1.04-3.87,1.59-5.96,1.58-2.17,0-4.21-.58-5.96-1.58-.03-.23-.04-.46-.04-.7M18,18.07c0-1.13-.33-2.24-.94-3.2M17.06,14.87c-1.1-1.73-3.01-2.77-5.06-2.77-2.05,0-3.96,1.04-5.06,2.77M6.94,14.87c-1.37-.93-3.24-.58-4.17.79-.39.57-.57,1.25-.51,1.93,1.2.42,2.47.58,3.74.48M6.94,14.87c-.61.95-.94,2.06-.94,3.2M15,6.65c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3,3,1.34,3,3ZM21,9.65c0,1.24-1.01,2.25-2.25,2.25s-2.25-1.01-2.25-2.25,1.01-2.25,2.25-2.25,2.25,1.01,2.25,2.25ZM7.5,9.65c0,1.24-1.01,2.25-2.25,2.25s-2.25-1.01-2.25-2.25,1.01-2.25,2.25-2.25,2.25,1.01,2.25,2.25Z"/>
            </svg>`,
    },
    {
      name: 'user-minus',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21,10.5h-6M12.75,6.9c0,1.86-1.51,3.38-3.38,3.38s-3.38-1.51-3.38-3.38h0c0-1.86,1.51-3.38,3.38-3.38s3.38,1.51,3.38,3.38ZM3,19.23v-.11c0-3.52,2.85-6.38,6.38-6.38s6.38,2.85,6.38,6.38v.11c-1.92,1.16-4.13,1.77-6.38,1.77-2.33,0-4.51-.65-6.37-1.77h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21,10.5h-6M12.75,6.9c0,1.86-1.51,3.38-3.38,3.38s-3.38-1.51-3.38-3.38h0c0-1.86,1.51-3.38,3.38-3.38s3.38,1.51,3.38,3.38ZM3,19.23v-.11c0-3.52,2.85-6.38,6.38-6.38s6.38,2.85,6.38,6.38v.11c-1.92,1.16-4.13,1.77-6.38,1.77-2.33,0-4.51-.65-6.37-1.77h0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21,10.5h-6M12.75,6.9c0,1.86-1.51,3.38-3.38,3.38s-3.38-1.51-3.38-3.38h0c0-1.86,1.51-3.38,3.38-3.38s3.38,1.51,3.38,3.38ZM3,19.23v-.11c0-3.52,2.85-6.38,6.38-6.38s6.38,2.85,6.38,6.38v.11c-1.92,1.16-4.13,1.77-6.38,1.77-2.33,0-4.51-.65-6.37-1.77h0Z"/>
            </svg>`,
    },
    {
      name: 'user-plus',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18,7.24v3M18,10.24v3M18,10.24h3M18,10.24h-3M12.75,6.64c0,1.86-1.51,3.38-3.38,3.38s-3.38-1.51-3.38-3.38h0c0-1.86,1.51-3.38,3.38-3.38s3.38,1.51,3.38,3.38ZM3,18.97v-.11c0-3.52,2.85-6.38,6.38-6.38s6.38,2.85,6.38,6.38v.11c-1.92,1.16-4.13,1.77-6.38,1.77-2.33,0-4.51-.65-6.37-1.77h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18,7.24v3M18,10.24v3M18,10.24h3M18,10.24h-3M12.75,6.64c0,1.86-1.51,3.38-3.38,3.38s-3.38-1.51-3.38-3.38h0c0-1.86,1.51-3.38,3.38-3.38s3.38,1.51,3.38,3.38ZM3,18.97v-.11c0-3.52,2.85-6.38,6.38-6.38s6.38,2.85,6.38,6.38v.11c-1.92,1.16-4.13,1.77-6.38,1.77-2.33,0-4.51-.65-6.37-1.77h0Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18,7.24v3M18,10.24v3M18,10.24h3M18,10.24h-3M12.75,6.64c0,1.86-1.51,3.38-3.38,3.38s-3.38-1.51-3.38-3.38h0c0-1.86,1.51-3.38,3.38-3.38s3.38,1.51,3.38,3.38ZM3,18.97v-.11c0-3.52,2.85-6.38,6.38-6.38s6.38,2.85,6.38,6.38v.11c-1.92,1.16-4.13,1.77-6.38,1.77-2.33,0-4.51-.65-6.37-1.77h0Z"/>
            </svg>`,
    },
    {
      name: 'x',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M14.23,10.16L22.98,0h-2.07l-7.59,8.82L7.25,0H.26l9.17,13.34L.26,24h2.07l8.02-9.32,6.4,9.32h6.99l-9.51-13.84h0ZM11.4,13.46l-.93-1.33L3.07,1.56h3.18l5.96,8.53.93,1.33,7.75,11.09h-3.18l-6.33-9.05h0Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M14.01,10.34L21.88,1.2h-1.86l-6.83,7.94L7.73,1.2H1.43l8.25,12.01L1.43,22.8h1.86l7.22-8.39,5.76,8.39h6.29l-8.56-12.46h0ZM11.46,13.31l-.84-1.2L3.96,2.6h2.86l5.36,7.68.84,1.2,6.97,9.98h-2.86l-5.7-8.15h.02Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M14.01,10.34L21.88,1.2h-1.86l-6.83,7.94L7.73,1.2H1.43l8.25,12.01L1.43,22.8h1.86l7.22-8.39,5.76,8.39h6.29l-8.56-12.46h0ZM11.46,13.31l-.84-1.2L3.96,2.6h2.86l5.36,7.68.84,1.2,6.97,9.98h-2.86l-5.7-8.15h.02Z"/>
            </svg>`,
    },
    {
      name: 'x-close',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.7,18.3l12.6-12.6M5.7,5.7l12.6,12.6"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.7,18.3l12.6-12.6M5.7,5.7l12.6,12.6"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.7,18.3l12.6-12.6M5.7,5.7l12.6,12.6"/>
            </svg>`,
    },
    {
      name: 'x-close-circle',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 0.75a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm-2.83 6.17l5.66 5.66m0-5.66l-5.66 5.66"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 0.75a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm-2.83 6.17l5.66 5.66m0-5.66l-5.66 5.66"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 0.75a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm-2.83 6.17l5.66 5.66m0-5.66l-5.66 5.66"/>
            </svg>`,
    },
    {
      name: 'youtube',
      renderedicon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M12.08,3.57h.13c1.23,0,7.48.05,9.17.5,1.04.28,1.84,1.09,2.12,2.13.15.57.26,1.32.33,2.1l.02.16.03.39v.16c.11,1.37.12,2.66.12,2.94v.11c0,.29-.02,1.66-.12,3.09v.16s-.03.16-.03.16c-.08.86-.19,1.71-.35,2.34-.28,1.04-1.09,1.85-2.12,2.13-1.74.47-8.35.5-9.27.5h-.21c-.46,0-2.38,0-4.39-.08h-.26s-.13-.01-.13-.01h-.26s-.26-.02-.26-.02c-1.67-.07-3.25-.19-3.98-.39-1.04-.28-1.85-1.09-2.12-2.13-.17-.63-.28-1.48-.35-2.34v-.16s-.02-.16-.02-.16c-.07-1.02-.12-2.04-.12-3.05v-.18c0-.32.02-1.44.1-2.67v-.15s.01-.08.01-.08v-.16s.05-.39.05-.39l.02-.16c.07-.78.18-1.53.33-2.1.28-1.04,1.09-1.85,2.12-2.13.73-.2,2.32-.32,3.98-.39h.26s.26-.02.26-.02h.13s.26-.01.26-.01c1.43-.05,2.86-.07,4.28-.08h.29ZM9.6,8.39v7.23l6.24-3.61s-6.24-3.62-6.24-3.62Z"/>
        </svg>
      ),
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12.08,3.57h.13c1.23,0,7.48.05,9.17.5,1.04.28,1.84,1.09,2.12,2.13.15.57.26,1.32.33,2.1l.02.16.03.39v.16c.11,1.37.12,2.66.12,2.94v.11c0,.29-.02,1.66-.12,3.09v.16s-.03.16-.03.16c-.08.86-.19,1.71-.35,2.34-.28,1.04-1.09,1.85-2.12,2.13-1.74.47-8.35.5-9.27.5h-.21c-.46,0-2.38,0-4.39-.08h-.26s-.13-.01-.13-.01h-.26s-.26-.02-.26-.02c-1.67-.07-3.25-.19-3.98-.39-1.04-.28-1.85-1.09-2.12-2.13-.17-.63-.28-1.48-.35-2.34v-.16s-.02-.16-.02-.16c-.07-1.02-.12-2.04-.12-3.05v-.18c0-.32.02-1.44.1-2.67v-.15s.01-.08.01-.08v-.16s.05-.39.05-.39l.02-.16c.07-.78.18-1.53.33-2.1.28-1.04,1.09-1.85,2.12-2.13.73-.2,2.32-.32,3.98-.39h.26s.26-.02.26-.02h.13s.26-.01.26-.01c1.43-.05,2.86-.07,4.28-.08h.29ZM9.6,8.39v7.23l6.24-3.61s-6.24-3.62-6.24-3.62Z"/>
            </svg>`,
      jsx: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M12.08,3.57h.13c1.23,0,7.48.05,9.17.5,1.04.28,1.84,1.09,2.12,2.13.15.57.26,1.32.33,2.1l.02.16.03.39v.16c.11,1.37.12,2.66.12,2.94v.11c0,.29-.02,1.66-.12,3.09v.16s-.03.16-.03.16c-.08.86-.19,1.71-.35,2.34-.28,1.04-1.09,1.85-2.12,2.13-1.74.47-8.35.5-9.27.5h-.21c-.46,0-2.38,0-4.39-.08h-.26s-.13-.01-.13-.01h-.26s-.26-.02-.26-.02c-1.67-.07-3.25-.19-3.98-.39-1.04-.28-1.85-1.09-2.12-2.13-.17-.63-.28-1.48-.35-2.34v-.16s-.02-.16-.02-.16c-.07-1.02-.12-2.04-.12-3.05v-.18c0-.32.02-1.44.1-2.67v-.15s.01-.08.01-.08v-.16s.05-.39.05-.39l.02-.16c.07-.78.18-1.53.33-2.1.28-1.04,1.09-1.85,2.12-2.13.73-.2,2.32-.32,3.98-.39h.26s.26-.02.26-.02h.13s.26-.01.26-.01c1.43-.05,2.86-.07,4.28-.08h.29ZM9.6,8.39v7.23l6.24-3.61s-6.24-3.62-6.24-3.62Z"/>
            </svg>`,
    },
  ];

  const copyToClipboard = async (icon: Icon, type: 'svg' | 'jsx') => {
    const value = type === 'svg' ? icon.svg : icon.jsx;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = value;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextArea);
    }

    setCopiedName(icon.name);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedName(null);
      setCopiedType(null);
    }, 1000);
  };

  const icons = reverse ? [...iconsArray].reverse() : iconsArray;
  
  const activeQuery = (query ?? searchQuery).toLowerCase();

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(activeQuery)
  );

  return (
    <>
      {showSearch && variant !== 'preview' && variant !== 'single-column' && (
        <div className="pb-5 sm:pb-10 flex items-center">
          <div className="mx-auto flex items-center justify-end lg:w-1/3 rounded-full py-2 px-4 w-full border border-black/15 dark:border-white/15">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.42 5.1c3.12 3.12 3.12 8.19 0 11.31-1.56 1.57-3.61 2.34-5.66 2.34s-4.1-.78-5.66-2.34c-3.12-3.12-3.12-8.19 0-11.31s8.19-3.12 11.31 0ZM21.27 21.27l-4.85-4.85"/>
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent ml-2 outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className={variant === 'single-column' ? 'grid grid-cols-1 gap-2' : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2'}>
        {filteredIcons.map((icon) => (
          <div key={icon.name} className="flex flex-col items-center justify-center py-4 px-1 bg-white rounded-2xl dark:bg-[#1a1a1a]">
            <div className="py-4 text-black dark:text-white">{icon.renderedicon}</div>
            <span className="text-xs my-2 text-black/55 dark:text-white/55">{icon.name}</span>
            <div className="flex justify-between items-center">
              <IconCopyButton
                label="SVG"
                copied={copiedName === icon.name && copiedType === 'svg'}
                onClick={() => copyToClipboard(icon, 'svg')}
              />
              <IconCopyButton
                label="JSX"
                copied={copiedName === icon.name && copiedType === 'jsx'}
                onClick={() => copyToClipboard(icon, 'jsx')}
              />
            </div>
          </div>
        ))}
      </div>
      {filteredIcons.length === 0 && (
        <p className="py-16 text-center text-sm text-black/45 dark:text-white/45">No icons match that search.</p>
      )}
    </>
  );
};

export default Icons;
