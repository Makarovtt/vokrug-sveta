import { Email } from "@/components/ui/icon-email";
import { TelephoneReceiver } from "@/components/ui/icon-phone";
import { Telegram } from "@/components/ui/icon-telegram";
import { Whatsapp } from "@/components/ui/icon-whatsapp";
import InputMask from "react-input-mask";
import { Card, CardBody, Input, Tab, Tabs } from "@nextui-org/react";
import { MailIcon } from "lucide-react";
import { ReactNode, useState } from "react";

export const TabsDeliverySend = () => {
  const Input = (props: any) => (
    <InputMask mask="99/99/9999" value={props.value} onChange={props.onChange}>
      {(inputProps: any) => (
        <MaterialInput
          {...inputProps}
          type="tel"
          disableUnderline
          onChange={props.onChange}
        />
      )}
    </InputMask>
  );
  const [valuePhone, setValuePhone] = useState<string>("");
  function onFocus(args: any) {
    if (valuePhone === "") setValuePhone("+7(___) ___ __-__");
  }
  function onFocusFalse() {
    if (valuePhone === "+7(___) ___ __-__") setValuePhone("");
  }
  function onChange(e: any) {
    setValuePhone(e.target.value);
  }
  return (
    <>
      <div className="mt-10">
        <p>Выберите способ как Вы хотите получить наше предложение</p>
        <div className="flex w-full flex-col mt-3">
          <Tabs
            aria-label="Options"
            classNames={{
              tabContent: "grayscale group-data-[selected=true]:grayscale-0",
            }}
          >
            <Tab
              key="phone"
              title={
                <div className="flex items-center space-x-2">
                  <TelephoneReceiver
                    width="16px"
                    height="16px"
                    color="#0ea5e9"
                  />
                  <span>Телефон</span>
                </div>
              }
            >
              <Card>
                <CardBody>
                  {/* <Input
                    key="phone"
                    radius="lg"
                    type="text"
                    placeholder="Номер"
                    className="max-w-[220px]"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-base">+7</span>
                      </div>
                    }
                  /> */}
                  <InputMask
                    mask="+7 (999) 999 99-99"
                    placeholder="номер телефона"
                    // value={value}
                    // onChange={onChange}
                  />
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="whatsapp"
              title={
                <div className="flex items-center space-x-2">
                  <Whatsapp width="20px" height="20px" color="green" />
                  <span>WhatsApp</span>
                </div>
              }
            >
              <Card>
                <CardBody>
                  {/* <InputMask
                    mask="+7 (999) 999 99-99"
                    placeholder="номер телефона"
                    // value={value}
                    // onChange={onChange}
                  /> */}
                  <Input
                    key="whatsapp"
                    radius="lg"
                    type="text"
                    placeholder="Номер"
                    className="max-w-[220px]"
                    value={valuePhone}
                    onFocus={onFocus}
                    onBlur={onFocusFalse}
                    onChange={onChange}
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-base">+7</span>
                      </div>
                    }
                  />

                  <InputMask
                    mask="99/99/9999"
                    value={valuePhone}
                    onChange={onFocus}
                  >
                    {(inputProps: any) => <Input {...inputProps} />}
                  </InputMask>
                  {/* </InputMask> */}
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="telegram"
              title={
                <div className="flex items-center space-x-2">
                  <Telegram width="20px" height="20px" color="green" />
                  <span>Telegram</span>
                </div>
              }
            >
              <Card>
                <CardBody>
                  <Input
                    key="telegram"
                    radius="lg"
                    type="text"
                    placeholder="Ник в телеграме"
                    className="max-w-[220px]"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-lg">@</span>
                      </div>
                    }
                  />
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="email"
              title={
                <div className="flex items-center space-x-2">
                  <Email width="20px" height="20px" color="#bb9830" />
                  <span>Email</span>
                </div>
              }
            >
              <Card>
                <CardBody>
                  <Input
                    key="email"
                    radius="lg"
                    type="email"
                    placeholder="Email"
                    className="max-w-[220px]"
                    startContent={
                      <MailIcon
                        size={20}
                        className="text-md text-default-400 pointer-events-none flex-shrink-0"
                      />
                    }
                  />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};
