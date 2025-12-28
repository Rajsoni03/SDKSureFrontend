# PatchedBoard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**serial_number** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**uart_port** | **string** |  | [optional] [default to undefined]
**baud_rate** | [**BaudRateEnum**](BaudRateEnum.md) |  | [optional] [default to undefined]
**data_bits** | [**DataBitsEnum**](DataBitsEnum.md) |  | [optional] [default to undefined]
**stop_bits** | [**StopBitsEnum**](StopBitsEnum.md) |  | [optional] [default to undefined]
**parity** | [**ParityEnum**](ParityEnum.md) |  | [optional] [default to undefined]
**status** | [**BoardStatusEnum**](BoardStatusEnum.md) |  | [optional] [readonly] [default to undefined]
**last_seen_at** | **string** |  | [optional] [readonly] [default to undefined]
**capabilities** | [**Array&lt;BoardCapability&gt;**](BoardCapability.md) |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedBoard } from './api';

const instance: PatchedBoard = {
    id,
    name,
    serial_number,
    description,
    uart_port,
    baud_rate,
    data_bits,
    stop_bits,
    parity,
    status,
    last_seen_at,
    capabilities,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
