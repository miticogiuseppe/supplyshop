import React, { Fragment } from 'react'
import { Dropdown } from 'react-bootstrap'
import SpkButton from './spk-button';
import SpkBadge from './spk-badge';

const SpkDropdown = ({ children, color, Badgecolor, Badgepill, Badgeclass, Badgeid, Badgetext, Menualign, Buttontag = false, Badgetag = false, SvgClass, Svgicon, Svg = false, Buttontext, Arrowicon = false, Buttonposition, toggleas, Split, iconPosition, Togglevariant, Imagetag, Size, Imagesrc, Imagename, Menuas, Navigate, Imageclass, Icon, IconClass, Toggletext, Drop, Customclass, Id, Menulabel, Customtoggleclass, as, Menuclass, Align, Show, Flip, Menuvariant, onTogglefunc, onSelectfunc, bsPrefix, Toggleshow, autoClose }) => {
  return (
    <Fragment>
      <Dropdown drop={Drop} className={Customclass} align={Align} bsPrefix={bsPrefix} as={as} autoClose={autoClose} show={Toggleshow} onToggle={onTogglefunc} onSelect={onSelectfunc}>
        {Buttontag && Buttonposition === "before" ? <SpkButton Buttonvariant={color}>{Buttontext}</SpkButton> : ""}
        <>

          <Dropdown.Toggle as={toggleas} split={Split} variant={Togglevariant} className={`btn ${Customtoggleclass}`} type="button" href={Navigate} size={Size}
            id={Id} data-bs-toggle="dropdown" aria-expanded="false">

            {iconPosition === 'before' ?
              (
                <>
                  {Imagetag ? (<img src={Imagesrc} alt={Imagename} className={Imageclass} />) : <>{Icon ? (<i className={IconClass}></i>) : ""}</>}
                  {Toggletext}
                </>
              )
              : (
                <>
                  {Toggletext}
                  {Imagetag ? (<img src={Imagesrc} alt={Imagename} className={Imageclass} />) : <>{Icon ? (<i className={IconClass}></i>) : ""}</>}
                </>
              )}
            {Arrowicon ? <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> : ""}

            {Svg ?
              <svg xmlns="http://www.w3.org/2000/svg" className={SvgClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d={Svgicon} />
              </svg>
              : ""}
            {Badgetag ?
              <SpkBadge variant={Badgecolor} Pill={Badgepill} Customclass={Badgeclass} Id={Badgeid}>{Badgetext}</SpkBadge>
              : ""}

          </Dropdown.Toggle>
          {Buttontag && Buttonposition === "after" ? (<SpkButton Buttonvariant={color}>{Buttontext}</SpkButton>) : ''}

        </>
        <Dropdown.Menu as={Menuas} align={Menualign} show={Show} variant={Menuvariant} className={Menuclass} bsPrefix={bsPrefix} flip={Flip} aria-labelledby={Menulabel}>
          {children}
        </Dropdown.Menu>
      </Dropdown>
    </Fragment>
  )
}

export default SpkDropdown