import svgPaths from "./svg-emgwynddh2";
import imgThumb3 from "./1442e1e23cc5e818a2da2fcd2095eea243b10c6b.png";
import imgImage from "./acb05f02624e2ca1eee00ca391cfec636b457a18.png";
import { imgContent } from "./svg-c2tfl";

function Thumb3() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[36px]" data-name="Thumb 3">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumb3} />
          <div className="absolute bg-[#20a464] inset-0" />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-[calc(50%-0.5px)] top-1/2 w-[15px]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
            <path clipRule="evenodd" d={svgPaths.p9c49440} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Item() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center max-h-[48px] min-h-[48px] relative shrink-0" data-name="Item">
      <Thumb3 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Security Compliance Report 2024</p>
    </div>
  );
}

function Item2() {
  return (
    <div className="bg-[#ebebeb] flex-[1_0_0] h-full min-w-px overflow-clip relative rounded-[9999px]" data-name="Item">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[10.667px] left-0 not-italic right-0 text-[#42526d] text-[7.333px] text-center top-[calc(50%-5.33px)]">SA</p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex items-start max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Avatar">
      <Item2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Saine Ahmed</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Avatar />
      <Text1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Icon">
          <path d={svgPaths.p29eb1600} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.45" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Icon />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Internal</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LeadIcon />
      <Text2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame />
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 84" r="2" />
        </svg>
      </div>
      <Frame1 />
    </div>
  );
}

function Item1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start justify-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[320px]" data-name="Item">
      <Text />
      <Frame2 />
    </div>
  );
}

function DocumentArrowUp() {
  return (
    <div className="absolute inset-[22.22%] overflow-clip" data-name="Document Arrow Up">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-1.5px)] top-[calc(50%+0.5px)] w-[15px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
          <path d={svgPaths.p37b5370} fill="var(--fill-0, #534CDA)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[36px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <DocumentArrowUp />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Uploaded File</p>
    </div>
  );
}

function Item3() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[208px]" data-name="Item">
      <Thumb />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">23 Views</p>
    </div>
  );
}

function Item4() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">242</p>
    </div>
  );
}

function Item5() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">21 Jun, 23:44</p>
    </div>
  );
}

function Item6() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3684de00} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Icon">
      <Icon2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex h-[24px] items-center justify-center max-h-[24px] min-h-[24px] min-w-[24px] overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
      <Icon1 />
    </div>
  );
}

function ButtonDropdown() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button [Dropdown]">
      <Button />
    </div>
  );
}

function Item7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-end max-h-[48px] min-h-[48px] pl-[12px] relative shrink-0" data-name="Item">
      <ButtonDropdown />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <Item />
      <Item1 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function Thumb4() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[36px]" data-name="Thumb 3">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumb3} />
          <div className="absolute bg-[#20a464] inset-0" />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-[calc(50%-0.5px)] top-1/2 w-[15px]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
            <path clipRule="evenodd" d={svgPaths.p9c49440} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Item8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center max-h-[48px] min-h-[48px] relative shrink-0" data-name="Item">
      <Thumb4 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Security Compliance Report 2024</p>
    </div>
  );
}

function Image() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[4999.5px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4999.5px] size-full" src={imgImage} />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex items-start max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Avatar">
      <Image />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Saine Ahmed</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Avatar1 />
      <Text8 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Icon">
          <path d={svgPaths.p29eb1600} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.45" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon1() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Icon3 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Internal</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LeadIcon1 />
      <Text9 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame4 />
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 84" r="2" />
        </svg>
      </div>
      <Frame5 />
    </div>
  );
}

function Item9() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start justify-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[320px]" data-name="Item">
      <Text7 />
      <Frame3 />
    </div>
  );
}

function DocumentArrowUp1() {
  return (
    <div className="absolute inset-[22.22%] overflow-clip" data-name="Document Arrow Up">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-1.5px)] top-[calc(50%+0.5px)] w-[15px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
          <path d={svgPaths.p37b5370} fill="var(--fill-0, #534CDA)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb1() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[36px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <DocumentArrowUp1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Uploaded File</p>
    </div>
  );
}

function Item10() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[208px]" data-name="Item">
      <Thumb1 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">23 Views</p>
    </div>
  );
}

function Item11() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">242</p>
    </div>
  );
}

function Item12() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">21 Jun, 23:44</p>
    </div>
  );
}

function Item13() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3684de00} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Icon">
      <Icon5 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex h-[24px] items-center justify-center max-h-[24px] min-h-[24px] min-w-[24px] overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
      <Icon4 />
    </div>
  );
}

function ButtonDropdown1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button [Dropdown]">
      <Button1 />
    </div>
  );
}

function Item14() {
  return (
    <div className="bg-white content-stretch flex items-center justify-end max-h-[48px] min-h-[48px] pl-[12px] relative shrink-0" data-name="Item">
      <ButtonDropdown1 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
      <Item14 />
    </div>
  );
}

function TextDescription() {
  return (
    <div className="absolute inset-[14.29%_22.22%]" data-name="Text Description">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15px] left-[calc(50%-0.11px)] top-[calc(50%+0.07px)] w-[20px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
          <path d={svgPaths.p15ee6c80} fill="var(--fill-0, white)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb2() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[40px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumb3} />
          <div className="absolute bg-[#2584fc] inset-0" />
        </div>
        <TextDescription />
      </div>
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Item15() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center max-h-[48px] min-h-[48px] relative shrink-0" data-name="Item">
      <Thumb2 />
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Security Compliance Report 2024</p>
    </div>
  );
}

function Item17() {
  return (
    <div className="bg-[#ebebeb] flex-[1_0_0] h-full min-w-px overflow-clip relative rounded-[9999px]" data-name="Item">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[10.667px] left-0 not-italic right-0 text-[#42526d] text-[7.333px] text-center top-[calc(50%-5.33px)]">SA</p>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="content-stretch flex items-start max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Avatar">
      <Item17 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Saine Ahmed</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Avatar2 />
      <Text15 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Icon">
          <path d={svgPaths.p29eb1600} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.45" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon2() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Icon6 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Internal</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LeadIcon2 />
      <Text16 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame7 />
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 84" r="2" />
        </svg>
      </div>
      <Frame8 />
    </div>
  );
}

function Item16() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start justify-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[320px]" data-name="Item">
      <Text14 />
      <Frame6 />
    </div>
  );
}

function DocumentArrowUp2() {
  return (
    <div className="absolute inset-[22.22%] overflow-clip" data-name="Document Arrow Up">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-1.5px)] top-[calc(50%+0.5px)] w-[15px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
          <path d={svgPaths.p37b5370} fill="var(--fill-0, #534CDA)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb5() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[36px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <DocumentArrowUp2 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Uploaded File</p>
    </div>
  );
}

function Item18() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[208px]" data-name="Item">
      <Thumb5 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">23 Views</p>
    </div>
  );
}

function Item19() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">242</p>
    </div>
  );
}

function Item20() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">21 Jun, 23:44</p>
    </div>
  );
}

function Item21() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3684de00} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Icon">
      <Icon8 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex h-[24px] items-center justify-center max-h-[24px] min-h-[24px] min-w-[24px] overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
      <Icon7 />
    </div>
  );
}

function ButtonDropdown2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button [Dropdown]">
      <Button2 />
    </div>
  );
}

function Item22() {
  return (
    <div className="bg-white content-stretch flex items-center justify-end max-h-[48px] min-h-[48px] pl-[12px] relative shrink-0" data-name="Item">
      <ButtonDropdown2 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <Item15 />
      <Item16 />
      <Item18 />
      <Item19 />
      <Item20 />
      <Item21 />
      <Item22 />
    </div>
  );
}

function Thumb6() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[40px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumb3} />
          <div className="absolute bg-[#20a464] inset-0" />
        </div>
        <div className="absolute bottom-1/4 left-[30.56%] right-[27.78%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 20">
            <path clipRule="evenodd" d={svgPaths.p3cdb3580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Item23() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center max-h-[48px] min-h-[48px] relative shrink-0" data-name="Item">
      <Thumb6 />
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Security Compliance Report 2024</p>
    </div>
  );
}

function Image1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[4999.5px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4999.5px] size-full" src={imgImage} />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="content-stretch flex items-start max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Avatar">
      <Image1 />
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Saine Ahmed</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Avatar3 />
      <Text22 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Icon">
          <path d={svgPaths.p29eb1600} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.45" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon3() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Icon9 />
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Internal</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LeadIcon3 />
      <Text23 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame10 />
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 84" r="2" />
        </svg>
      </div>
      <Frame11 />
    </div>
  );
}

function Item24() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start justify-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[320px]" data-name="Item">
      <Text21 />
      <Frame9 />
    </div>
  );
}

function DocumentArrowUp3() {
  return (
    <div className="absolute inset-[22.22%] overflow-clip" data-name="Document Arrow Up">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-1.5px)] top-[calc(50%+0.5px)] w-[15px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
          <path d={svgPaths.p37b5370} fill="var(--fill-0, #534CDA)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb7() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[36px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <DocumentArrowUp3 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Uploaded File</p>
    </div>
  );
}

function Item25() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[208px]" data-name="Item">
      <Thumb7 />
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">23 Views</p>
    </div>
  );
}

function Item26() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text25 />
        </div>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">242</p>
    </div>
  );
}

function Item27() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text26 />
        </div>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">21 Jun, 23:44</p>
    </div>
  );
}

function Item28() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text27 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3684de00} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Icon">
      <Icon11 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex h-[24px] items-center justify-center max-h-[24px] min-h-[24px] min-w-[24px] overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
      <Icon10 />
    </div>
  );
}

function ButtonDropdown3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button [Dropdown]">
      <Button3 />
    </div>
  );
}

function Item29() {
  return (
    <div className="bg-white content-stretch flex items-center justify-end max-h-[48px] min-h-[48px] pl-[12px] relative shrink-0" data-name="Item">
      <ButtonDropdown3 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <Item23 />
      <Item24 />
      <Item25 />
      <Item26 />
      <Item27 />
      <Item28 />
      <Item29 />
    </div>
  );
}

function TextDescription1() {
  return (
    <div className="absolute inset-[14.29%_22.22%]" data-name="Text Description">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15px] left-[calc(50%-0.11px)] top-[calc(50%+0.07px)] w-[20px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
          <path d={svgPaths.p15ee6c80} fill="var(--fill-0, white)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb8() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[40px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumb3} />
          <div className="absolute bg-[#2584fc] inset-0" />
        </div>
        <TextDescription1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Item30() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center max-h-[48px] min-h-[48px] relative shrink-0" data-name="Item">
      <Thumb8 />
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Security Compliance Report 2024</p>
    </div>
  );
}

function Image2() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[4999.5px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4999.5px] size-full" src={imgImage} />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="content-stretch flex items-start max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Avatar">
      <Image2 />
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Saine Ahmed</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Avatar4 />
      <Text29 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Icon">
          <path d={svgPaths.p29eb1600} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.45" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon4() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Icon12 />
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Internal</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LeadIcon4 />
      <Text30 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame13 />
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 84" r="2" />
        </svg>
      </div>
      <Frame14 />
    </div>
  );
}

function Item31() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start justify-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[320px]" data-name="Item">
      <Text28 />
      <Frame12 />
    </div>
  );
}

function DocumentArrowUp4() {
  return (
    <div className="absolute inset-[22.22%] overflow-clip" data-name="Document Arrow Up">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-1.5px)] top-[calc(50%+0.5px)] w-[15px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
          <path d={svgPaths.p37b5370} fill="var(--fill-0, #534CDA)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb9() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[36px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <DocumentArrowUp4 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Uploaded File</p>
    </div>
  );
}

function Item32() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[208px]" data-name="Item">
      <Thumb9 />
      <Text31 />
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">23 Views</p>
    </div>
  );
}

function Item33() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text32 />
        </div>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">242</p>
    </div>
  );
}

function Item34() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text33 />
        </div>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">21 Jun, 23:44</p>
    </div>
  );
}

function Item35() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text34 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3684de00} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Icon">
      <Icon14 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex h-[24px] items-center justify-center max-h-[24px] min-h-[24px] min-w-[24px] overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
      <Icon13 />
    </div>
  );
}

function ButtonDropdown4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button [Dropdown]">
      <Button4 />
    </div>
  );
}

function Item36() {
  return (
    <div className="bg-white content-stretch flex items-center justify-end max-h-[48px] min-h-[48px] pl-[12px] relative shrink-0" data-name="Item">
      <ButtonDropdown4 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <Item30 />
      <Item31 />
      <Item32 />
      <Item33 />
      <Item34 />
      <Item35 />
      <Item36 />
    </div>
  );
}

function TablerPdf() {
  return (
    <div className="absolute inset-[7.14%_16.67%]" data-name="tabler:pdf">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 34.2857">
        <g id="tabler:pdf">
          <path d={svgPaths.p36ff5600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.28571" />
        </g>
      </svg>
    </div>
  );
}

function Thumb10() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[40px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumb3} />
          <div className="absolute bg-[#e23323] inset-0" />
        </div>
        <TablerPdf />
      </div>
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Item37() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center max-h-[48px] min-h-[48px] relative shrink-0" data-name="Item">
      <Thumb10 />
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Security Compliance Report 2024</p>
    </div>
  );
}

function Item39() {
  return (
    <div className="bg-[#ebebeb] flex-[1_0_0] h-full min-w-px overflow-clip relative rounded-[9999px]" data-name="Item">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[10.667px] left-0 not-italic right-0 text-[#42526d] text-[7.333px] text-center top-[calc(50%-5.33px)]">SA</p>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="content-stretch flex items-start max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Avatar">
      <Item39 />
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Saine Ahmed</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Avatar5 />
      <Text36 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Icon">
          <path d={svgPaths.p29eb1600} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.45" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon5() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Icon15 />
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Internal</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LeadIcon5 />
      <Text37 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame16 />
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 84" r="2" />
        </svg>
      </div>
      <Frame17 />
    </div>
  );
}

function Item38() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start justify-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[320px]" data-name="Item">
      <Text35 />
      <Frame15 />
    </div>
  );
}

function DocumentArrowUp5() {
  return (
    <div className="absolute inset-[22.22%] overflow-clip" data-name="Document Arrow Up">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-1.5px)] top-[calc(50%+0.5px)] w-[15px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
          <path d={svgPaths.p37b5370} fill="var(--fill-0, #534CDA)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb11() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[36px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <DocumentArrowUp5 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Uploaded File</p>
    </div>
  );
}

function Item40() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[208px]" data-name="Item">
      <Thumb11 />
      <Text38 />
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">23 Views</p>
    </div>
  );
}

function Item41() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text39 />
        </div>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">242</p>
    </div>
  );
}

function Item42() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text40 />
        </div>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">21 Jun, 23:44</p>
    </div>
  );
}

function Item43() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text41 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3684de00} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Icon">
      <Icon17 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex h-[24px] items-center justify-center max-h-[24px] min-h-[24px] min-w-[24px] overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
      <Icon16 />
    </div>
  );
}

function ButtonDropdown5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button [Dropdown]">
      <Button5 />
    </div>
  );
}

function Item44() {
  return (
    <div className="bg-white content-stretch flex items-center justify-end max-h-[48px] min-h-[48px] pl-[12px] relative shrink-0" data-name="Item">
      <ButtonDropdown5 />
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <Item37 />
      <Item38 />
      <Item40 />
      <Item41 />
      <Item42 />
      <Item43 />
      <Item44 />
    </div>
  );
}

function TextDescription2() {
  return (
    <div className="absolute inset-[14.29%_22.22%]" data-name="Text Description">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15px] left-[calc(50%-0.11px)] top-[calc(50%+0.07px)] w-[20px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
          <path d={svgPaths.p15ee6c80} fill="var(--fill-0, white)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb12() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[40px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumb3} />
          <div className="absolute bg-[#2584fc] inset-0" />
        </div>
        <TextDescription2 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Item45() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center max-h-[48px] min-h-[48px] relative shrink-0" data-name="Item">
      <Thumb12 />
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Security Compliance Report 2024</p>
    </div>
  );
}

function Item47() {
  return (
    <div className="bg-[#ebebeb] flex-[1_0_0] h-full min-w-px overflow-clip relative rounded-[9999px]" data-name="Item">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[10.667px] left-0 not-italic right-0 text-[#42526d] text-[7.333px] text-center top-[calc(50%-5.33px)]">SA</p>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="content-stretch flex items-start max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Avatar">
      <Item47 />
    </div>
  );
}

function Text43() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Saine Ahmed</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Avatar6 />
      <Text43 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Icon">
          <path d={svgPaths.p29eb1600} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.45" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon6() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Icon18 />
    </div>
  );
}

function Text44() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Internal</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LeadIcon6 />
      <Text44 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame19 />
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 84" r="2" />
        </svg>
      </div>
      <Frame20 />
    </div>
  );
}

function Item46() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start justify-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[320px]" data-name="Item">
      <Text42 />
      <Frame18 />
    </div>
  );
}

function DocumentArrowUp6() {
  return (
    <div className="absolute inset-[22.22%] overflow-clip" data-name="Document Arrow Up">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-1.5px)] top-[calc(50%+0.5px)] w-[15px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
          <path d={svgPaths.p37b5370} fill="var(--fill-0, #534CDA)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb13() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[36px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <DocumentArrowUp6 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Uploaded File</p>
    </div>
  );
}

function Item48() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[208px]" data-name="Item">
      <Thumb13 />
      <Text45 />
    </div>
  );
}

function Text46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">23 Views</p>
    </div>
  );
}

function Item49() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text46 />
        </div>
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">242</p>
    </div>
  );
}

function Item50() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text47 />
        </div>
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">21 Jun, 23:44</p>
    </div>
  );
}

function Item51() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text48 />
        </div>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3684de00} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Icon">
      <Icon20 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex h-[24px] items-center justify-center max-h-[24px] min-h-[24px] min-w-[24px] overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
      <Icon19 />
    </div>
  );
}

function ButtonDropdown6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button [Dropdown]">
      <Button6 />
    </div>
  );
}

function Item52() {
  return (
    <div className="bg-white content-stretch flex items-center justify-end max-h-[48px] min-h-[48px] pl-[12px] relative shrink-0" data-name="Item">
      <ButtonDropdown6 />
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <Item45 />
      <Item46 />
      <Item48 />
      <Item49 />
      <Item50 />
      <Item51 />
      <Item52 />
    </div>
  );
}

function Thumb14() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[40px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumb3} />
          <div className="absolute bg-[#20a464] inset-0" />
        </div>
        <div className="absolute bottom-1/4 left-[30.56%] right-[27.78%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 20">
            <path clipRule="evenodd" d={svgPaths.p3cdb3580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Item53() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center max-h-[48px] min-h-[48px] relative shrink-0" data-name="Item">
      <Thumb14 />
    </div>
  );
}

function Text49() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Security Compliance Report 2024</p>
    </div>
  );
}

function Item55() {
  return (
    <div className="bg-[#ebebeb] flex-[1_0_0] h-full min-w-px overflow-clip relative rounded-[9999px]" data-name="Item">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[10.667px] left-0 not-italic right-0 text-[#42526d] text-[7.333px] text-center top-[calc(50%-5.33px)]">SA</p>
    </div>
  );
}

function Avatar7() {
  return (
    <div className="content-stretch flex items-start max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Avatar">
      <Item55 />
    </div>
  );
}

function Text50() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Saine Ahmed</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Avatar7 />
      <Text50 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Icon">
          <path d={svgPaths.p29eb1600} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.45" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon7() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Icon21 />
    </div>
  );
}

function Text51() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Internal</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LeadIcon7 />
      <Text51 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame22 />
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 84" r="2" />
        </svg>
      </div>
      <Frame23 />
    </div>
  );
}

function Item54() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start justify-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[320px]" data-name="Item">
      <Text49 />
      <Frame21 />
    </div>
  );
}

function DocumentArrowUp7() {
  return (
    <div className="absolute inset-[22.22%] overflow-clip" data-name="Document Arrow Up">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-1.5px)] top-[calc(50%+0.5px)] w-[15px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
          <path d={svgPaths.p37b5370} fill="var(--fill-0, #534CDA)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb15() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[36px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <DocumentArrowUp7 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Uploaded File</p>
    </div>
  );
}

function Item56() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[208px]" data-name="Item">
      <Thumb15 />
      <Text52 />
    </div>
  );
}

function Text53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">23 Views</p>
    </div>
  );
}

function Item57() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text53 />
        </div>
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">242</p>
    </div>
  );
}

function Item58() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text54 />
        </div>
      </div>
    </div>
  );
}

function Text55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">21 Jun, 23:44</p>
    </div>
  );
}

function Item59() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text55 />
        </div>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3684de00} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Icon">
      <Icon23 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex h-[24px] items-center justify-center max-h-[24px] min-h-[24px] min-w-[24px] overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
      <Icon22 />
    </div>
  );
}

function ButtonDropdown7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button [Dropdown]">
      <Button7 />
    </div>
  );
}

function Item60() {
  return (
    <div className="bg-white content-stretch flex items-center justify-end max-h-[48px] min-h-[48px] pl-[12px] relative shrink-0" data-name="Item">
      <ButtonDropdown7 />
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <Item53 />
      <Item54 />
      <Item56 />
      <Item57 />
      <Item58 />
      <Item59 />
      <Item60 />
    </div>
  );
}

function Thumb16() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[40px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumb3} />
          <div className="absolute bg-[#20a464] inset-0" />
        </div>
        <div className="absolute bottom-1/4 left-[30.56%] right-[27.78%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 20">
            <path clipRule="evenodd" d={svgPaths.p3cdb3580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Item61() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center max-h-[48px] min-h-[48px] relative shrink-0" data-name="Item">
      <Thumb16 />
    </div>
  );
}

function Text56() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Security Compliance Report 2024</p>
    </div>
  );
}

function Item63() {
  return (
    <div className="bg-[#ebebeb] flex-[1_0_0] h-full min-w-px overflow-clip relative rounded-[9999px]" data-name="Item">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[10.667px] left-0 not-italic right-0 text-[#42526d] text-[7.333px] text-center top-[calc(50%-5.33px)]">SA</p>
    </div>
  );
}

function Avatar8() {
  return (
    <div className="content-stretch flex items-start max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Avatar">
      <Item63 />
    </div>
  );
}

function Text57() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Saine Ahmed</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Avatar8 />
      <Text57 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Icon">
          <path d={svgPaths.p29eb1600} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.45" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon8() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Icon24 />
    </div>
  );
}

function Text58() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Internal</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LeadIcon8 />
      <Text58 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame25 />
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 84" r="2" />
        </svg>
      </div>
      <Frame26 />
    </div>
  );
}

function Item62() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start justify-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[320px]" data-name="Item">
      <Text56 />
      <Frame24 />
    </div>
  );
}

function DocumentArrowUp8() {
  return (
    <div className="absolute inset-[22.22%] overflow-clip" data-name="Document Arrow Up">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-1.5px)] top-[calc(50%+0.5px)] w-[15px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
          <path d={svgPaths.p37b5370} fill="var(--fill-0, #534CDA)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb17() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[36px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <DocumentArrowUp8 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Uploaded File</p>
    </div>
  );
}

function Item64() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[208px]" data-name="Item">
      <Thumb17 />
      <Text59 />
    </div>
  );
}

function Text60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">23 Views</p>
    </div>
  );
}

function Item65() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text60 />
        </div>
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">242</p>
    </div>
  );
}

function Item66() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text61 />
        </div>
      </div>
    </div>
  );
}

function Text62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">21 Jun, 23:44</p>
    </div>
  );
}

function Item67() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text62 />
        </div>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3684de00} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon25() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Icon">
      <Icon26 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex h-[24px] items-center justify-center max-h-[24px] min-h-[24px] min-w-[24px] overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
      <Icon25 />
    </div>
  );
}

function ButtonDropdown8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button [Dropdown]">
      <Button8 />
    </div>
  );
}

function Item68() {
  return (
    <div className="bg-white content-stretch flex items-center justify-end max-h-[48px] min-h-[48px] pl-[12px] relative shrink-0" data-name="Item">
      <ButtonDropdown8 />
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <Item61 />
      <Item62 />
      <Item64 />
      <Item65 />
      <Item66 />
      <Item67 />
      <Item68 />
    </div>
  );
}

function TablerPdf1() {
  return (
    <div className="absolute inset-[7.14%_16.67%]" data-name="tabler:pdf">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 34.2857">
        <g id="tabler:pdf">
          <path d={svgPaths.pd4aca80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.28571" />
        </g>
      </svg>
    </div>
  );
}

function Thumb18() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[40px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumb3} />
          <div className="absolute bg-[#e23323] inset-0" />
        </div>
        <TablerPdf1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Item69() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center max-h-[48px] min-h-[48px] relative shrink-0" data-name="Item">
      <Thumb18 />
    </div>
  );
}

function Text63() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Security Compliance Report 2024</p>
    </div>
  );
}

function Item71() {
  return (
    <div className="bg-[#ebebeb] flex-[1_0_0] h-full min-w-px overflow-clip relative rounded-[9999px]" data-name="Item">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[10.667px] left-0 not-italic right-0 text-[#42526d] text-[7.333px] text-center top-[calc(50%-5.33px)]">SA</p>
    </div>
  );
}

function Avatar9() {
  return (
    <div className="content-stretch flex items-start max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Avatar">
      <Item71 />
    </div>
  );
}

function Text64() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Saine Ahmed</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Avatar9 />
      <Text64 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Icon">
          <path d={svgPaths.p29eb1600} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.45" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon9() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Icon27 />
    </div>
  );
}

function Text65() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Internal</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LeadIcon9 />
      <Text65 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame28 />
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 84" r="2" />
        </svg>
      </div>
      <Frame29 />
    </div>
  );
}

function Item70() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start justify-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[320px]" data-name="Item">
      <Text63 />
      <Frame27 />
    </div>
  );
}

function DocumentArrowUp9() {
  return (
    <div className="absolute inset-[22.22%] overflow-clip" data-name="Document Arrow Up">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-1.5px)] top-[calc(50%+0.5px)] w-[15px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
          <path d={svgPaths.p37b5370} fill="var(--fill-0, #534CDA)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb19() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[36px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <DocumentArrowUp9 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Uploaded File</p>
    </div>
  );
}

function Item72() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[208px]" data-name="Item">
      <Thumb19 />
      <Text66 />
    </div>
  );
}

function Text67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">23 Views</p>
    </div>
  );
}

function Item73() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text67 />
        </div>
      </div>
    </div>
  );
}

function Text68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">242</p>
    </div>
  );
}

function Item74() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text68 />
        </div>
      </div>
    </div>
  );
}

function Text69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">21 Jun, 23:44</p>
    </div>
  );
}

function Item75() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text69 />
        </div>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3684de00} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Icon">
      <Icon29 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex h-[24px] items-center justify-center max-h-[24px] min-h-[24px] min-w-[24px] overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
      <Icon28 />
    </div>
  );
}

function ButtonDropdown9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button [Dropdown]">
      <Button9 />
    </div>
  );
}

function Item76() {
  return (
    <div className="bg-white content-stretch flex items-center justify-end max-h-[48px] min-h-[48px] pl-[12px] relative shrink-0" data-name="Item">
      <ButtonDropdown9 />
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <Item69 />
      <Item70 />
      <Item72 />
      <Item73 />
      <Item74 />
      <Item75 />
      <Item76 />
    </div>
  );
}

function TextDescription3() {
  return (
    <div className="absolute inset-[14.29%_22.22%]" data-name="Text Description">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15px] left-[calc(50%-0.11px)] top-[calc(50%+0.07px)] w-[20px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
          <path d={svgPaths.p15ee6c80} fill="var(--fill-0, white)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb20() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[40px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumb3} />
          <div className="absolute bg-[#2584fc] inset-0" />
        </div>
        <TextDescription3 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Item77() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center max-h-[48px] min-h-[48px] relative shrink-0" data-name="Item">
      <Thumb20 />
    </div>
  );
}

function Text70() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Security Compliance Report 2024</p>
    </div>
  );
}

function Item79() {
  return (
    <div className="bg-[#ebebeb] flex-[1_0_0] h-full min-w-px overflow-clip relative rounded-[9999px]" data-name="Item">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[10.667px] left-0 not-italic right-0 text-[#42526d] text-[7.333px] text-center top-[calc(50%-5.33px)]">SA</p>
    </div>
  );
}

function Avatar10() {
  return (
    <div className="content-stretch flex items-start max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Avatar">
      <Item79 />
    </div>
  );
}

function Text71() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Saine Ahmed</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Avatar10 />
      <Text71 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Icon">
          <path d={svgPaths.p29eb1600} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.45" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LeadIcon10() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] relative shrink-0 size-[16px]" data-name="Lead Icon">
      <Icon30 />
    </div>
  );
}

function Text72() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(10,10,10,0.45)] whitespace-nowrap">Internal</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LeadIcon10 />
      <Text72 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame31 />
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 84" r="2" />
        </svg>
      </div>
      <Frame32 />
    </div>
  );
}

function Item78() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start justify-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[320px]" data-name="Item">
      <Text70 />
      <Frame30 />
    </div>
  );
}

function DocumentArrowUp10() {
  return (
    <div className="absolute inset-[22.22%] overflow-clip" data-name="Document Arrow Up">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-1.5px)] top-[calc(50%+0.5px)] w-[15px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
          <path d={svgPaths.p37b5370} fill="var(--fill-0, #534CDA)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Thumb21() {
  return (
    <div className="bg-[rgba(10,10,10,0.07)] relative rounded-[4px] shrink-0 size-[36px]" data-name="Thumb">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <DocumentArrowUp10 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Uploaded File</p>
    </div>
  );
}

function Item80() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center max-h-[48px] min-h-[48px] px-[12px] relative shrink-0 w-[208px]" data-name="Item">
      <Thumb21 />
      <Text73 />
    </div>
  );
}

function Text74() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">23 Views</p>
    </div>
  );
}

function Item81() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text74 />
        </div>
      </div>
    </div>
  );
}

function Text75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">242</p>
    </div>
  );
}

function Item82() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text75 />
        </div>
      </div>
    </div>
  );
}

function Text76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">21 Jun, 23:44</p>
    </div>
  );
}

function Item83() {
  return (
    <div className="bg-white flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative" data-name="Item">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center max-h-[inherit] min-h-[inherit] px-[12px] relative size-full">
          <Text76 />
        </div>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3684de00} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.25" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon31() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] relative shrink-0 size-[16px]" data-name="Icon">
      <Icon32 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex h-[24px] items-center justify-center max-h-[24px] min-h-[24px] min-w-[24px] overflow-clip relative rounded-[6px] shrink-0" data-name="Button">
      <Icon31 />
    </div>
  );
}

function ButtonDropdown10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button [Dropdown]">
      <Button10 />
    </div>
  );
}

function Item84() {
  return (
    <div className="bg-white content-stretch flex items-center justify-end max-h-[48px] min-h-[48px] pl-[12px] relative shrink-0" data-name="Item">
      <ButtonDropdown10 />
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <Item77 />
      <Item78 />
      <Item80 />
      <Item81 />
      <Item82 />
      <Item83 />
      <Item84 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[360px] top-[2894px] w-[1056px]" data-name="Container">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
      <Row10 />
    </div>
  );
}

function Block() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block1() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block2() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block3() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block4() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block5() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block6() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block7() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block8() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block9() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block10() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block11() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block12() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block13() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block14() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block15() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block16() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block17() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block18() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block19() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block20() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block21() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block22() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block23() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block24() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block25() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block26() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block27() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block28() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block29() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block />
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />
      <Block7 />
      <Block8 />
      <Block9 />
      <Block10 />
      <Block11 />
      <Block12 />
      <Block13 />
      <Block14 />
      <Block15 />
      <Block16 />
      <Block17 />
      <Block18 />
      <Block19 />
      <Block20 />
      <Block21 />
      <Block22 />
      <Block23 />
      <Block24 />
      <Block25 />
      <Block26 />
      <Block27 />
      <Block28 />
      <Block29 />
    </div>
  );
}

function Block30() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block31() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block32() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block33() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block34() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block35() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block36() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block37() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block38() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block39() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block40() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block41() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block42() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block43() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block44() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block45() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block46() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block47() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block48() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block49() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block50() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block51() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block52() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block53() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block54() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block55() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block56() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block57() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block58() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block59() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block30 />
      <Block31 />
      <Block32 />
      <Block33 />
      <Block34 />
      <Block35 />
      <Block36 />
      <Block37 />
      <Block38 />
      <Block39 />
      <Block40 />
      <Block41 />
      <Block42 />
      <Block43 />
      <Block44 />
      <Block45 />
      <Block46 />
      <Block47 />
      <Block48 />
      <Block49 />
      <Block50 />
      <Block51 />
      <Block52 />
      <Block53 />
      <Block54 />
      <Block55 />
      <Block56 />
      <Block57 />
      <Block58 />
      <Block59 />
    </div>
  );
}

function Block60() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block61() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block62() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block63() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block64() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block65() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block66() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block67() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block68() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block69() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block70() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block71() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block72() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block73() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block74() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block75() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block76() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block77() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block78() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block79() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block80() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block81() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block82() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block83() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block84() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block85() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block86() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block87() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block88() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block89() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block60 />
      <Block61 />
      <Block62 />
      <Block63 />
      <Block64 />
      <Block65 />
      <Block66 />
      <Block67 />
      <Block68 />
      <Block69 />
      <Block70 />
      <Block71 />
      <Block72 />
      <Block73 />
      <Block74 />
      <Block75 />
      <Block76 />
      <Block77 />
      <Block78 />
      <Block79 />
      <Block80 />
      <Block81 />
      <Block82 />
      <Block83 />
      <Block84 />
      <Block85 />
      <Block86 />
      <Block87 />
      <Block88 />
      <Block89 />
    </div>
  );
}

function Block90() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block91() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block92() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block93() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block94() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block95() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block96() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block97() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block98() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block99() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block100() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block101() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block102() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block103() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block104() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block105() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block106() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block107() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block108() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block109() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block110() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block111() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block112() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block113() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block114() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block115() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block116() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block117() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block118() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block119() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block90 />
      <Block91 />
      <Block92 />
      <Block93 />
      <Block94 />
      <Block95 />
      <Block96 />
      <Block97 />
      <Block98 />
      <Block99 />
      <Block100 />
      <Block101 />
      <Block102 />
      <Block103 />
      <Block104 />
      <Block105 />
      <Block106 />
      <Block107 />
      <Block108 />
      <Block109 />
      <Block110 />
      <Block111 />
      <Block112 />
      <Block113 />
      <Block114 />
      <Block115 />
      <Block116 />
      <Block117 />
      <Block118 />
      <Block119 />
    </div>
  );
}

function Block120() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block121() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block122() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block123() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block124() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block125() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block126() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block127() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block128() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block129() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block130() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block131() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block132() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block133() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block134() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block135() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block136() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block137() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block138() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block139() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block140() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block141() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block142() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block143() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block144() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block145() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block146() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block147() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block148() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block149() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block120 />
      <Block121 />
      <Block122 />
      <Block123 />
      <Block124 />
      <Block125 />
      <Block126 />
      <Block127 />
      <Block128 />
      <Block129 />
      <Block130 />
      <Block131 />
      <Block132 />
      <Block133 />
      <Block134 />
      <Block135 />
      <Block136 />
      <Block137 />
      <Block138 />
      <Block139 />
      <Block140 />
      <Block141 />
      <Block142 />
      <Block143 />
      <Block144 />
      <Block145 />
      <Block146 />
      <Block147 />
      <Block148 />
      <Block149 />
    </div>
  );
}

function Block150() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block151() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block152() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block153() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block154() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block155() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block156() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block157() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block158() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block159() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block160() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block161() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block162() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block163() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block164() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block165() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block166() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block167() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block168() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block169() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block170() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block171() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block172() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block173() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block174() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block175() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block176() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block177() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block178() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block179() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block150 />
      <Block151 />
      <Block152 />
      <Block153 />
      <Block154 />
      <Block155 />
      <Block156 />
      <Block157 />
      <Block158 />
      <Block159 />
      <Block160 />
      <Block161 />
      <Block162 />
      <Block163 />
      <Block164 />
      <Block165 />
      <Block166 />
      <Block167 />
      <Block168 />
      <Block169 />
      <Block170 />
      <Block171 />
      <Block172 />
      <Block173 />
      <Block174 />
      <Block175 />
      <Block176 />
      <Block177 />
      <Block178 />
      <Block179 />
    </div>
  );
}

function Block180() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block181() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block182() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block183() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block184() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block185() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block186() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block187() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block188() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block189() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block190() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block191() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block192() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block193() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block194() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block195() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block196() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block197() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block198() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block199() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block200() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block201() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block202() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block203() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block204() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block205() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block206() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block207() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block208() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block209() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block180 />
      <Block181 />
      <Block182 />
      <Block183 />
      <Block184 />
      <Block185 />
      <Block186 />
      <Block187 />
      <Block188 />
      <Block189 />
      <Block190 />
      <Block191 />
      <Block192 />
      <Block193 />
      <Block194 />
      <Block195 />
      <Block196 />
      <Block197 />
      <Block198 />
      <Block199 />
      <Block200 />
      <Block201 />
      <Block202 />
      <Block203 />
      <Block204 />
      <Block205 />
      <Block206 />
      <Block207 />
      <Block208 />
      <Block209 />
    </div>
  );
}

function Block210() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block211() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block212() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block213() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block214() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block215() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block216() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block217() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block218() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block219() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block220() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block221() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block222() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block223() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block224() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block225() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block226() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block227() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block228() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block229() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block230() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block231() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block232() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block233() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block234() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block235() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block236() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block237() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block238() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block239() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block210 />
      <Block211 />
      <Block212 />
      <Block213 />
      <Block214 />
      <Block215 />
      <Block216 />
      <Block217 />
      <Block218 />
      <Block219 />
      <Block220 />
      <Block221 />
      <Block222 />
      <Block223 />
      <Block224 />
      <Block225 />
      <Block226 />
      <Block227 />
      <Block228 />
      <Block229 />
      <Block230 />
      <Block231 />
      <Block232 />
      <Block233 />
      <Block234 />
      <Block235 />
      <Block236 />
      <Block237 />
      <Block238 />
      <Block239 />
    </div>
  );
}

function Block240() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block241() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block242() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block243() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block244() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block245() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block246() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block247() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block248() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block249() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block250() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block251() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block252() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block253() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block254() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block255() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block256() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block257() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block258() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block259() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block260() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block261() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block262() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block263() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block264() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block265() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block266() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block267() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block268() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block269() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block240 />
      <Block241 />
      <Block242 />
      <Block243 />
      <Block244 />
      <Block245 />
      <Block246 />
      <Block247 />
      <Block248 />
      <Block249 />
      <Block250 />
      <Block251 />
      <Block252 />
      <Block253 />
      <Block254 />
      <Block255 />
      <Block256 />
      <Block257 />
      <Block258 />
      <Block259 />
      <Block260 />
      <Block261 />
      <Block262 />
      <Block263 />
      <Block264 />
      <Block265 />
      <Block266 />
      <Block267 />
      <Block268 />
      <Block269 />
    </div>
  );
}

function Block270() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block271() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block272() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block273() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block274() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block275() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block276() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block277() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block278() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block279() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block280() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block281() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block282() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block283() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block284() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block285() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block286() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block287() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block288() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block289() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block290() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block291() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block292() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block293() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block294() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block295() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block296() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block297() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block298() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block299() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block270 />
      <Block271 />
      <Block272 />
      <Block273 />
      <Block274 />
      <Block275 />
      <Block276 />
      <Block277 />
      <Block278 />
      <Block279 />
      <Block280 />
      <Block281 />
      <Block282 />
      <Block283 />
      <Block284 />
      <Block285 />
      <Block286 />
      <Block287 />
      <Block288 />
      <Block289 />
      <Block290 />
      <Block291 />
      <Block292 />
      <Block293 />
      <Block294 />
      <Block295 />
      <Block296 />
      <Block297 />
      <Block298 />
      <Block299 />
    </div>
  );
}

function Block300() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block301() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block302() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block303() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block304() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block305() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block306() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block307() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block308() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block309() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block310() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block311() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block312() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block313() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block314() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block315() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block316() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block317() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block318() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block319() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block320() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block321() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block322() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block323() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block324() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block325() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block326() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block327() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block328() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block329() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block300 />
      <Block301 />
      <Block302 />
      <Block303 />
      <Block304 />
      <Block305 />
      <Block306 />
      <Block307 />
      <Block308 />
      <Block309 />
      <Block310 />
      <Block311 />
      <Block312 />
      <Block313 />
      <Block314 />
      <Block315 />
      <Block316 />
      <Block317 />
      <Block318 />
      <Block319 />
      <Block320 />
      <Block321 />
      <Block322 />
      <Block323 />
      <Block324 />
      <Block325 />
      <Block326 />
      <Block327 />
      <Block328 />
      <Block329 />
    </div>
  );
}

function Block330() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block331() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block332() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block333() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block334() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block335() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block336() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block337() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block338() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block339() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block340() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block341() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block342() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block343() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block344() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block345() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block346() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block347() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block348() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block349() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block350() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block351() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block352() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block353() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block354() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block355() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block356() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block357() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block358() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block359() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block330 />
      <Block331 />
      <Block332 />
      <Block333 />
      <Block334 />
      <Block335 />
      <Block336 />
      <Block337 />
      <Block338 />
      <Block339 />
      <Block340 />
      <Block341 />
      <Block342 />
      <Block343 />
      <Block344 />
      <Block345 />
      <Block346 />
      <Block347 />
      <Block348 />
      <Block349 />
      <Block350 />
      <Block351 />
      <Block352 />
      <Block353 />
      <Block354 />
      <Block355 />
      <Block356 />
      <Block357 />
      <Block358 />
      <Block359 />
    </div>
  );
}

function Block360() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block361() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block362() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block363() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block364() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block365() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block366() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block367() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block368() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block369() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block370() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block371() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block372() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block373() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block374() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block375() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block376() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block377() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block378() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block379() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block380() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block381() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block382() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block383() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block384() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block385() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block386() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block387() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block388() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block389() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block360 />
      <Block361 />
      <Block362 />
      <Block363 />
      <Block364 />
      <Block365 />
      <Block366 />
      <Block367 />
      <Block368 />
      <Block369 />
      <Block370 />
      <Block371 />
      <Block372 />
      <Block373 />
      <Block374 />
      <Block375 />
      <Block376 />
      <Block377 />
      <Block378 />
      <Block379 />
      <Block380 />
      <Block381 />
      <Block382 />
      <Block383 />
      <Block384 />
      <Block385 />
      <Block386 />
      <Block387 />
      <Block388 />
      <Block389 />
    </div>
  );
}

function Block390() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block391() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block392() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block393() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block394() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block395() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block396() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block397() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block398() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block399() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block400() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block401() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block402() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block403() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block404() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block405() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block406() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block407() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block408() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block409() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block410() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block411() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block412() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block413() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block414() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block415() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block416() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block417() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block418() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block419() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block390 />
      <Block391 />
      <Block392 />
      <Block393 />
      <Block394 />
      <Block395 />
      <Block396 />
      <Block397 />
      <Block398 />
      <Block399 />
      <Block400 />
      <Block401 />
      <Block402 />
      <Block403 />
      <Block404 />
      <Block405 />
      <Block406 />
      <Block407 />
      <Block408 />
      <Block409 />
      <Block410 />
      <Block411 />
      <Block412 />
      <Block413 />
      <Block414 />
      <Block415 />
      <Block416 />
      <Block417 />
      <Block418 />
      <Block419 />
    </div>
  );
}

function Block420() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block421() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block422() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block423() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block424() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block425() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block426() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block427() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block428() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block429() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block430() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block431() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block432() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block433() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block434() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block435() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block436() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block437() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block438() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block439() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block440() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block441() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block442() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block443() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block444() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block445() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block446() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block447() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block448() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block449() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block420 />
      <Block421 />
      <Block422 />
      <Block423 />
      <Block424 />
      <Block425 />
      <Block426 />
      <Block427 />
      <Block428 />
      <Block429 />
      <Block430 />
      <Block431 />
      <Block432 />
      <Block433 />
      <Block434 />
      <Block435 />
      <Block436 />
      <Block437 />
      <Block438 />
      <Block439 />
      <Block440 />
      <Block441 />
      <Block442 />
      <Block443 />
      <Block444 />
      <Block445 />
      <Block446 />
      <Block447 />
      <Block448 />
      <Block449 />
    </div>
  );
}

function Block450() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block451() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block452() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block453() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block454() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block455() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block456() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block457() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block458() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block459() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block460() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block461() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block462() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block463() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block464() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block465() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block466() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block467() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block468() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block469() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block470() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block471() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block472() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block473() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block474() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block475() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block476() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block477() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block478() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block479() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block450 />
      <Block451 />
      <Block452 />
      <Block453 />
      <Block454 />
      <Block455 />
      <Block456 />
      <Block457 />
      <Block458 />
      <Block459 />
      <Block460 />
      <Block461 />
      <Block462 />
      <Block463 />
      <Block464 />
      <Block465 />
      <Block466 />
      <Block467 />
      <Block468 />
      <Block469 />
      <Block470 />
      <Block471 />
      <Block472 />
      <Block473 />
      <Block474 />
      <Block475 />
      <Block476 />
      <Block477 />
      <Block478 />
      <Block479 />
    </div>
  );
}

function Block480() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block481() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block482() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block483() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block484() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block485() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block486() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block487() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block488() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block489() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block490() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block491() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block492() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block493() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block494() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block495() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block496() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block497() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block498() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block499() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block500() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block501() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block502() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block503() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block504() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block505() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block506() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block507() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block508() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block509() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block480 />
      <Block481 />
      <Block482 />
      <Block483 />
      <Block484 />
      <Block485 />
      <Block486 />
      <Block487 />
      <Block488 />
      <Block489 />
      <Block490 />
      <Block491 />
      <Block492 />
      <Block493 />
      <Block494 />
      <Block495 />
      <Block496 />
      <Block497 />
      <Block498 />
      <Block499 />
      <Block500 />
      <Block501 />
      <Block502 />
      <Block503 />
      <Block504 />
      <Block505 />
      <Block506 />
      <Block507 />
      <Block508 />
      <Block509 />
    </div>
  );
}

function Block510() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block511() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block512() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block513() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block514() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block515() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block516() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block517() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block518() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block519() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block520() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block521() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block522() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block523() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block524() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block525() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block526() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block527() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block528() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block529() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block530() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block531() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block532() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block533() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block534() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block535() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block536() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block537() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block538() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block539() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block510 />
      <Block511 />
      <Block512 />
      <Block513 />
      <Block514 />
      <Block515 />
      <Block516 />
      <Block517 />
      <Block518 />
      <Block519 />
      <Block520 />
      <Block521 />
      <Block522 />
      <Block523 />
      <Block524 />
      <Block525 />
      <Block526 />
      <Block527 />
      <Block528 />
      <Block529 />
      <Block530 />
      <Block531 />
      <Block532 />
      <Block533 />
      <Block534 />
      <Block535 />
      <Block536 />
      <Block537 />
      <Block538 />
      <Block539 />
    </div>
  );
}

function Block540() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block541() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block542() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block543() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block544() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block545() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block546() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block547() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block548() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block549() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block550() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block551() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block552() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block553() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block554() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block555() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block556() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block557() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block558() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block559() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block560() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block561() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block562() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block563() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block564() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block565() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block566() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block567() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block568() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block569() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block540 />
      <Block541 />
      <Block542 />
      <Block543 />
      <Block544 />
      <Block545 />
      <Block546 />
      <Block547 />
      <Block548 />
      <Block549 />
      <Block550 />
      <Block551 />
      <Block552 />
      <Block553 />
      <Block554 />
      <Block555 />
      <Block556 />
      <Block557 />
      <Block558 />
      <Block559 />
      <Block560 />
      <Block561 />
      <Block562 />
      <Block563 />
      <Block564 />
      <Block565 />
      <Block566 />
      <Block567 />
      <Block568 />
      <Block569 />
    </div>
  );
}

function Block570() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block571() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block572() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block573() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block574() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block575() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block576() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block577() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block578() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block579() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block580() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block581() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block582() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block583() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block584() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block585() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block586() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block587() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block588() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block589() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block590() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block591() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block592() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block593() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block594() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block595() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block596() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block597() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block598() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block599() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block570 />
      <Block571 />
      <Block572 />
      <Block573 />
      <Block574 />
      <Block575 />
      <Block576 />
      <Block577 />
      <Block578 />
      <Block579 />
      <Block580 />
      <Block581 />
      <Block582 />
      <Block583 />
      <Block584 />
      <Block585 />
      <Block586 />
      <Block587 />
      <Block588 />
      <Block589 />
      <Block590 />
      <Block591 />
      <Block592 />
      <Block593 />
      <Block594 />
      <Block595 />
      <Block596 />
      <Block597 />
      <Block598 />
      <Block599 />
    </div>
  );
}

function Block600() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block601() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block602() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block603() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block604() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block605() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block606() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block607() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block608() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block609() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block610() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block611() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block612() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block613() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block614() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block615() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block616() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block617() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block618() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block619() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block620() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block621() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block622() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block623() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block624() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block625() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block626() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block627() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block628() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block629() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block600 />
      <Block601 />
      <Block602 />
      <Block603 />
      <Block604 />
      <Block605 />
      <Block606 />
      <Block607 />
      <Block608 />
      <Block609 />
      <Block610 />
      <Block611 />
      <Block612 />
      <Block613 />
      <Block614 />
      <Block615 />
      <Block616 />
      <Block617 />
      <Block618 />
      <Block619 />
      <Block620 />
      <Block621 />
      <Block622 />
      <Block623 />
      <Block624 />
      <Block625 />
      <Block626 />
      <Block627 />
      <Block628 />
      <Block629 />
    </div>
  );
}

function Block630() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block631() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block632() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block633() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block634() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block635() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block636() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block637() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block638() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block639() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block640() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block641() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block642() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block643() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block644() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block645() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block646() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block647() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block648() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block649() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block650() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block651() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block652() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block653() {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block654() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block655() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block656() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block657() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block658() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Block659() {
  return (
    <div className="relative shrink-0 size-[75.977px]" data-name="Block">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b-[1.187px] border-r-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Block630 />
      <Block631 />
      <Block632 />
      <Block633 />
      <Block634 />
      <Block635 />
      <Block636 />
      <Block637 />
      <Block638 />
      <Block639 />
      <Block640 />
      <Block641 />
      <Block642 />
      <Block643 />
      <Block644 />
      <Block645 />
      <Block646 />
      <Block647 />
      <Block648 />
      <Block649 />
      <Block650 />
      <Block651 />
      <Block652 />
      <Block653 />
      <Block654 />
      <Block655 />
      <Block656 />
      <Block657 />
      <Block658 />
      <Block659 />
    </div>
  );
}

function Rows() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 top-0" data-name="Rows">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Row11 />
        <Row12 />
        <Row13 />
        <Row14 />
        <Row15 />
        <Row16 />
        <Row17 />
        <Row18 />
        <Row19 />
        <Row20 />
        <Row21 />
        <Row22 />
        <Row23 />
        <Row24 />
        <Row25 />
        <Row26 />
        <Row27 />
        <Row28 />
        <Row29 />
        <Row30 />
        <Row31 />
        <Row32 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[1.187px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Content() {
  return (
    <div className="-translate-x-1/2 absolute h-[1671.492px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[284.914px_0px] mask-size-[1709.481px_1709.481px] top-0 w-[2279.308px]" style={{ maskImage: `url('${imgContent}')` }} data-name="Content">
      <Rows />
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div className="-translate-x-1/2 absolute h-[1080.297px] left-1/2 overflow-clip top-[-794px] w-[1440px]" data-name="Background pattern">
      <Content />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[21.333px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 21.3333">
        <g id="Icon">
          <path d={svgPaths.p19b98800} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon33() {
  return (
    <div className="max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[4.8px] shrink-0 size-[32px]" data-name="Icon">
      <div aria-hidden="true" className="absolute bg-white inset-0 pointer-events-none rounded-[4.8px]" />
      <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Icon34 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.4px_0px_0px_rgba(0,0,0,0.12)]" />
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(10,10,10,0.16)] border-solid inset-0 pointer-events-none rounded-[4.8px] shadow-[0px_0.8px_1.6px_-0.4px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Icon33 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.18px] whitespace-nowrap">{`Start a New Research `}</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Container">
      <Frame33 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p1ac4a380} fill="var(--fill-0, #0A0A0A)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon35() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[20px] min-w-[20px] relative shrink-0 size-[20px]" data-name="Icon">
      <Icon36 />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex h-[40px] items-center justify-center max-h-[40px] min-h-[40px] min-w-[40px] overflow-clip relative rounded-[8px] shrink-0" data-name="Button">
      <Icon35 />
    </div>
  );
}

function More() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="More">
      <Button11 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Container">
      <More />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function MessageNavBar() {
  return (
    <div className="absolute bg-white content-stretch flex h-[56px] items-center justify-center left-0 max-h-[64px] min-h-[32px] px-[24px] py-[16px] top-0 w-[1440px]" data-name="Message [Nav Bar]">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.07)] border-b border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[74px] relative shrink-0 w-[90px]" data-name="Logo">
      <div className="absolute inset-[-0.68%_-17.78%_-41.22%_-17.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122 105">
          <g filter="url(#filter0_dddd_6_1856)" id="Logo">
            <g id="Vector">
              <path d={svgPaths.p831c000} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3d24db00} fill="#F5F5F5" />
              <path d={svgPaths.p24ed5f80} stroke="var(--stroke-0, #0A0A0A)" strokeOpacity="0.16" strokeWidth="0.5" />
            </g>
            <g clipPath="url(#clip0_6_1856)" id="shining-fill">
              <path d={svgPaths.p25832400} fill="var(--fill-0, #0A0A0A)" id="Vector_2" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="108" id="filter0_dddd_6_1856" width="122" x="0" y="-1.5">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.04 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_1856" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect2_dropShadow_6_1856" />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="6" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.03 0" />
              <feBlend in2="effect1_dropShadow_6_1856" mode="normal" result="effect2_dropShadow_6_1856" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="8" result="effect3_dropShadow_6_1856" />
              <feOffset dy="16" />
              <feGaussianBlur stdDeviation="12" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.03 0" />
              <feBlend in2="effect2_dropShadow_6_1856" mode="normal" result="effect3_dropShadow_6_1856" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="0.5" result="effect4_dropShadow_6_1856" />
              <feOffset />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.1 0" />
              <feBlend in2="effect3_dropShadow_6_1856" mode="normal" result="effect4_dropShadow_6_1856" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_6_1856" mode="normal" result="shape" />
            </filter>
            <clipPath id="clip0_6_1856">
              <rect fill="white" height="37.8091" transform="matrix(0.837366 -0.546643 0.817739 0.575589 29.8769 31.0029)" width="37.8027" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Headline">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#0a0a0a] text-[28px] tracking-[-0.56px] w-full">What insights are you chasing today?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[480px] relative shrink-0 text-[18px] text-[rgba(10,10,10,0.7)] tracking-[-0.18px] w-full">Let’s get your next big idea off the ground</p>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p305ddd00} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon37() {
  return (
    <div className="max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative rounded-[3.6px] shrink-0 size-[24px]" data-name="Icon">
      <div aria-hidden="true" className="absolute bg-white inset-0 pointer-events-none rounded-[3.6px]" />
      <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Icon38 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.3px_0px_0px_rgba(0,0,0,0.12)]" />
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.16)] border-solid inset-0 pointer-events-none rounded-[3.6px] shadow-[0px_0.6px_1.2px_-0.3px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Icon37 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] tracking-[-0.16px] whitespace-nowrap">Auto Focus Group Discussion</p>
    </div>
  );
}

function ModalHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Modal Header">
      <Frame34 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.7)] w-full">Our Al agents dive into your topic and deliver a crisp insights report with key opinions and takeaways</p>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[12px] shadow-[0px_0px_0px_0.5px_rgba(10,10,10,0.1),0px_16px_24px_-8px_rgba(10,10,10,0.03),0px_8px_12px_-4px_rgba(10,10,10,0.03),0px_2px_4px_0px_rgba(10,10,10,0.04)] shrink-0 w-[445px]" data-name="Newsletter">
      <ModalHeader />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p305ddd00} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon39() {
  return (
    <div className="max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative rounded-[3.6px] shrink-0 size-[24px]" data-name="Icon">
      <div aria-hidden="true" className="absolute bg-white inset-0 pointer-events-none rounded-[3.6px]" />
      <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Icon40 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.3px_0px_0px_rgba(0,0,0,0.12)]" />
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.16)] border-solid inset-0 pointer-events-none rounded-[3.6px] shadow-[0px_0.6px_1.2px_-0.3px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Icon39 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] tracking-[-0.16px] whitespace-nowrap">Self Managed Focus Group Discussion</p>
    </div>
  );
}

function ModalHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Modal Header">
      <Frame35 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.7)] w-full">Run your own sessions by setting the agenda, gathering participant opinions, and exploring insights w flexible controls.</p>
    </div>
  );
}

function Newsletter1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[12px] shadow-[0px_0px_0px_0.5px_rgba(10,10,10,0.1),0px_16px_24px_-8px_rgba(10,10,10,0.03),0px_8px_12px_-4px_rgba(10,10,10,0.03),0px_2px_4px_0px_rgba(10,10,10,0.04)] shrink-0 w-[445px]" data-name="Newsletter">
      <ModalHeader1 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_1829)" id="Icon">
          <path d={svgPaths.p15a53c80} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_6_1829">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon41() {
  return (
    <div className="max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative rounded-[3.6px] shrink-0 size-[24px]" data-name="Icon">
      <div aria-hidden="true" className="absolute bg-white inset-0 pointer-events-none rounded-[3.6px]" />
      <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Icon42 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.3px_0px_0px_rgba(0,0,0,0.12)]" />
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.16)] border-solid inset-0 pointer-events-none rounded-[3.6px] shadow-[0px_0.6px_1.2px_-0.3px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Icon41 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] tracking-[-0.16px] whitespace-nowrap">Creative Ranking</p>
    </div>
  );
}

function ModalHeader2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Modal Header">
      <Frame36 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.7)] w-full">We analyze and rank ad creatives by how well they perform, helping you focus on the ones that drive the most impact</p>
    </div>
  );
}

function Newsletter2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[12px] shadow-[0px_0px_0px_0.5px_rgba(10,10,10,0.1),0px_16px_24px_-8px_rgba(10,10,10,0.03),0px_8px_12px_-4px_rgba(10,10,10,0.03),0px_2px_4px_0px_rgba(10,10,10,0.04)] shrink-0 w-[445px]" data-name="Newsletter">
      <ModalHeader2 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_1903)" id="Icon">
          <path d={svgPaths.pfb63880} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_6_1903">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon43() {
  return (
    <div className="max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative rounded-[3.6px] shrink-0 size-[24px]" data-name="Icon">
      <div aria-hidden="true" className="absolute bg-white inset-0 pointer-events-none rounded-[3.6px]" />
      <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Icon44 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.3px_0px_0px_rgba(0,0,0,0.12)]" />
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(10,10,10,0.16)] border-solid inset-0 pointer-events-none rounded-[3.6px] shadow-[0px_0.6px_1.2px_-0.3px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Icon43 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] tracking-[-0.16px] whitespace-nowrap">Attention Heatmaps</p>
    </div>
  );
}

function ModalHeader3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Modal Header">
      <Frame37 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.7)] w-full">Predicts where people will focus on your creative and delivers an insights report to guide your next move</p>
    </div>
  );
}

function Newsletter3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[12px] shadow-[0px_0px_0px_0.5px_rgba(10,10,10,0.1),0px_16px_24px_-8px_rgba(10,10,10,0.03),0px_8px_12px_-4px_rgba(10,10,10,0.03),0px_2px_4px_0px_rgba(10,10,10,0.04)] shrink-0 w-[445px]" data-name="Newsletter">
      <ModalHeader3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[320px] items-start max-w-[445px] relative shrink-0 w-full" data-name="Container">
      <Newsletter />
      <Newsletter1 />
      <Newsletter2 />
      <Newsletter3 />
    </div>
  );
}

function Content1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[40px] items-center justify-center left-[calc(50%-0.5px)] top-[104px] w-[507px]" data-name="Content">
      <Logo />
      <Headline />
      <Container4 />
    </div>
  );
}

export default function StartANewResearch() {
  return (
    <div className="bg-white overflow-clip relative rounded-[12px] size-full" data-name="Start a New Research">
      <Container />
      <BackgroundPattern />
      <MessageNavBar />
      <Content1 />
    </div>
  );
}