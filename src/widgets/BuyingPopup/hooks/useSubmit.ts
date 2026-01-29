import React from 'react';
import { IForm } from '../ui/BuyingPopup';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { useAppSelector } from '@/shared/models/reduxHooks';
import { deliverCode } from '@/shared/config/deliverCode.config';
import { POST } from '@/shared/api/POST';
import { getDevicePackage } from '../utils/getDevicePackage';
import { getDeviceWithPackage } from '../utils/getDeviceWithCasePackage';
import { TPromocode } from '../model/TPromocode';
import { incrementSales } from '../api/incrementSales.client';

interface IUseSumbit{
    handleSubmit : (onValid: SubmitHandler<IForm>, onInvalid?: SubmitErrorHandler<IForm> | undefined) => (e?: React.BaseSyntheticEvent) => Promise<void>
    delivceryCity : string
    deliverySumm : number,
    cdekComission : number,
    isPromocode : TPromocode | null
}
const useSubmit = ({handleSubmit, delivceryCity, deliverySumm, cdekComission, isPromocode} : IUseSumbit) => {

        const goToCongratulation = () => {
            window.location.href = '/congratulation';
        };

        const cartOrders = useAppSelector( (state) => state.cartSlice.orders )

        const onSubmit = handleSubmit(async (data: IForm) => {
    
          const deivcePackage = getDevicePackage(data.comment, isPromocode)

          const deiveWithCasePackage = getDeviceWithPackage(data.comment, isPromocode)
    
          const devicePackages = Array.from({length : cartOrders[0].counter} , (order,id) => ({...deivcePackage,  number : `sm-${id+1}`}))
    
          const deviceWithCasePackages = Array.from({length: cartOrders[1].counter} , (order, id) => ({...deiveWithCasePackage, number : `smwc-${id+1}`}))
    
          const packages = [...devicePackages, ...deviceWithCasePackages]

          const address = delivceryCity.split(',')[0] + ' ' + data.address
                  
          const delivery_code = data.deliveryMethod === "postmat" ? data.postmat.code
          : data.deliveryMethod === "deliveryPoint" ? data.deliveryPoint.code : null
    
          const tarrif_code =
            data.deliveryMethod === "courier"
              ? deliverCode.COURIER
              : data.deliveryMethod === "deliveryPoint"
              ? deliverCode.PVZ
              : deliverCode.POSTMAT;
            try{
              console.log("Нажата кнопка заканчивания")
              if (data.deliveryMethod === "courier")  {
                await POST({
                    endpoint: "/order",
                    data: {
                        "comment" : data.comment,
                        type : 1,
                        tariff_code : tarrif_code,
                        shipment_point : "MSK55",
                        value : 0,
                        sum : cdekComission,
                        to_location : {
                            country_code : "RU",
                            "address" : address
                          },
                        delivery_recipient_cost : {
                          value : deliverySumm
                        },
                        
                        delivery_point : delivery_code,
                        packages : packages,
                        recipient : {
                          email : data.email,
                          name : data.FIO,
                          phones : [{number : "+7" + data.phone.slice(1)}]
                        }
                    },
                    headers: {
                      "Content-Type" : "application/json"
                    },
                  });
              }
              else{
                await POST({
                  endpoint: "/order",
                  data: {
                      "comment" : data.comment,
                      type : 1,
                      tariff_code : tarrif_code,
                      shipment_point : "MSK55",
                      value : 0,
                      sum : cdekComission,
                      delivery_recipient_cost : {
                        value : deliverySumm
                      },
                      delivery_point : delivery_code,
                      packages : packages,
                      recipient : {
                        email : data.email,
                        name : data.FIO,
                        phones : [{number : "+7" + data.phone.slice(1)}]
                      }
                  },
                  headers: {
                    "Content-Type" : "application/json"
                  },
                });
              }
              try{
                await incrementSales(isPromocode);
              }
              catch(e){
                console.log("Не создать добавление промокода.")
              }
              console.log("Удалось закончить, щас будет переадресация.")
              goToCongratulation()
            }
            catch(error){
              console.warn(error)
              console.log("Закончить не удалось")
              alert("Произошла ошибка, перезагрузите пожалуйста страницу или зайдите позже.")
            }
        });
        return onSubmit
};

export default useSubmit;