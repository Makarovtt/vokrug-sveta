import { Email } from "@/components/ui/icon-email";
import { TelephoneReceiver } from "@/components/ui/icon-phone";
import { Telegram } from "@/components/ui/icon-telegram";
import { Whatsapp } from "@/components/ui/icon-whatsapp";
import InputMask from "react-input-mask";
import { Card, CardBody, Input, Tab, Tabs } from "@nextui-org/react";
import { MailIcon } from "lucide-react";
import React, { ReactNode, useState } from "react";

export const TabsDeliverySend = () => {
  const [valuePhone, setValuePhone] = useState<string>("");
  return (
    <>
      <div className="mt-10 text-gray-600 font-semibold">
        <p>Выберите способ как Вы хотите получить наше предложение</p>
        <div className="flex w-full flex-col mt-3 font-normal">
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
                  <InputMask
                    mask="(999) 999 99-99"
                    value={valuePhone}
                    onChange={(e) => setValuePhone(e.target.value)}
                  >
                    <Input
                      key="phone"
                      radius="lg"
                      type="text"
                      placeholder="(___) ___ __-__"
                      classNames={{
                        inputWrapper: [
                          "py-3 px-4 h-auto w-auto min-w-[310px] max-w-[310px] border-2 border-slate-300",
                          "shadow-lg bg-white hover:!bg-white hover:!border-sky-400",
                        ],
                        input: "text-lg text-gray-700",
                      }}
                      startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-lg">+7</span>
                        </div>
                      }
                    />
                  </InputMask>
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
                  <InputMask
                    mask="(999) 999 99-99"
                    value={valuePhone}
                    onChange={(e) => setValuePhone(e.target.value)}
                  >
                    <Input
                      key="whatsapp"
                      radius="lg"
                      type="text"
                      placeholder="(___) ___ __-__"
                      classNames={{
                        inputWrapper: [
                          "py-3 px-4 h-auto w-auto min-w-[310px] max-w-[310px] border-2 border-slate-300",
                          "shadow-lg bg-white hover:!bg-white hover:!border-sky-400",
                        ],
                        input: "text-lg text-gray-700",
                      }}
                      startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-lg">+7</span>
                        </div>
                      }
                    />
                  </InputMask>
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
                    classNames={{
                      inputWrapper: [
                        "py-3 px-4 h-auto w-auto min-w-[310px] max-w-[310px] border-2 border-slate-300",
                        "shadow-lg bg-white hover:!bg-white hover:!border-sky-400",
                      ],
                      input: "text-lg text-gray-700",
                    }}
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
                    classNames={{
                      inputWrapper: [
                        "py-3 px-4 h-auto w-auto min-w-[310px] max-w-[310px] border-2 border-slate-300",
                        "shadow-lg bg-white hover:!bg-white hover:!border-sky-400",
                      ],
                      input: "text-lg text-gray-700",
                    }}
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
