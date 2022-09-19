import { ControlCenter } from '../Atoms/StyledContainers';
import { DisplayContainerSign } from '../Atoms/DisplayContainerSign';
import { ControlCenterBtn } from '../Atoms/ControlCenterBtn';

export const Control = () => {
  return (
    <ControlCenter>
      <DisplayContainerSign>CONTROL CENTER</DisplayContainerSign>
      <ControlCenterBtn
        actionPath="NapPath"
        navTo="NapPath"
        firstColumn={2}
        firstRow={5}
        color="#05396e"
      >
        TAKE A NAP
      </ControlCenterBtn>

      <ControlCenterBtn
        actionPath="NapPath"
        navTo="NapPath"
        firstColumn={2}
        firstRow={10}
        color="#05396e"
      >
        REPORT MACHINE DAMAGE
      </ControlCenterBtn>

      <ControlCenterBtn
        actionPath="NapPath"
        navTo="NapPath"
        firstColumn={2}
        firstRow={15}
        color="#05396e"
      >
        REPORT OUT OF RESOURCES
      </ControlCenterBtn>

      <ControlCenterBtn
        actionPath="NapPath"
        navTo="NapPath"
        firstColumn={12}
        firstRow={5}
        color="#05396e"
      >
        END WORK FOR TODAY
      </ControlCenterBtn>

      <ControlCenterBtn
        actionPath="NapPath"
        navTo="NapPath"
        firstColumn={12}
        firstRow={10}
        color="#05396e"
      >
        IDN
      </ControlCenterBtn>

      <ControlCenterBtn
        actionPath="NapPath"
        navTo="NapPath"
        firstColumn={12}
        firstRow={15}
        color="#05396e"
      >
        IDN
      </ControlCenterBtn>
    </ControlCenter>
  );
};
