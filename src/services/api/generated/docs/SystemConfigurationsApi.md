# SystemConfigurationsApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**systemConfigurationsCreate**](#systemconfigurationscreate) | **POST** /api/v1/system-configurations/ | |
|[**systemConfigurationsDestroy**](#systemconfigurationsdestroy) | **DELETE** /api/v1/system-configurations/{id}/ | |
|[**systemConfigurationsList**](#systemconfigurationslist) | **GET** /api/v1/system-configurations/ | |
|[**systemConfigurationsPartialUpdate**](#systemconfigurationspartialupdate) | **PATCH** /api/v1/system-configurations/{id}/ | |
|[**systemConfigurationsRetrieve**](#systemconfigurationsretrieve) | **GET** /api/v1/system-configurations/{id}/ | |
|[**systemConfigurationsUpdate**](#systemconfigurationsupdate) | **PUT** /api/v1/system-configurations/{id}/ | |

# **systemConfigurationsCreate**
> SystemConfiguration systemConfigurationsCreate(systemConfiguration)

Manage system configuration entries.

### Example

```typescript
import {
    SystemConfigurationsApi,
    Configuration,
    SystemConfiguration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystemConfigurationsApi(configuration);

let systemConfiguration: SystemConfiguration; //

const { status, data } = await apiInstance.systemConfigurationsCreate(
    systemConfiguration
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemConfiguration** | **SystemConfiguration**|  | |


### Return type

**SystemConfiguration**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **systemConfigurationsDestroy**
> systemConfigurationsDestroy()

Manage system configuration entries.

### Example

```typescript
import {
    SystemConfigurationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystemConfigurationsApi(configuration);

let id: number; //A unique integer value identifying this system configuration. (default to undefined)

const { status, data } = await apiInstance.systemConfigurationsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this system configuration. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **systemConfigurationsList**
> PaginatedSystemConfigurationList systemConfigurationsList()

Manage system configuration entries.

### Example

```typescript
import {
    SystemConfigurationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystemConfigurationsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.systemConfigurationsList(
    ordering,
    page,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **search** | [**string**] | A search term. | (optional) defaults to undefined|


### Return type

**PaginatedSystemConfigurationList**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **systemConfigurationsPartialUpdate**
> SystemConfiguration systemConfigurationsPartialUpdate()

Manage system configuration entries.

### Example

```typescript
import {
    SystemConfigurationsApi,
    Configuration,
    PatchedSystemConfiguration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystemConfigurationsApi(configuration);

let id: number; //A unique integer value identifying this system configuration. (default to undefined)
let patchedSystemConfiguration: PatchedSystemConfiguration; // (optional)

const { status, data } = await apiInstance.systemConfigurationsPartialUpdate(
    id,
    patchedSystemConfiguration
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedSystemConfiguration** | **PatchedSystemConfiguration**|  | |
| **id** | [**number**] | A unique integer value identifying this system configuration. | defaults to undefined|


### Return type

**SystemConfiguration**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **systemConfigurationsRetrieve**
> SystemConfiguration systemConfigurationsRetrieve()

Manage system configuration entries.

### Example

```typescript
import {
    SystemConfigurationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystemConfigurationsApi(configuration);

let id: number; //A unique integer value identifying this system configuration. (default to undefined)

const { status, data } = await apiInstance.systemConfigurationsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this system configuration. | defaults to undefined|


### Return type

**SystemConfiguration**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **systemConfigurationsUpdate**
> SystemConfiguration systemConfigurationsUpdate(systemConfiguration)

Manage system configuration entries.

### Example

```typescript
import {
    SystemConfigurationsApi,
    Configuration,
    SystemConfiguration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystemConfigurationsApi(configuration);

let id: number; //A unique integer value identifying this system configuration. (default to undefined)
let systemConfiguration: SystemConfiguration; //

const { status, data } = await apiInstance.systemConfigurationsUpdate(
    id,
    systemConfiguration
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **systemConfiguration** | **SystemConfiguration**|  | |
| **id** | [**number**] | A unique integer value identifying this system configuration. | defaults to undefined|


### Return type

**SystemConfiguration**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

