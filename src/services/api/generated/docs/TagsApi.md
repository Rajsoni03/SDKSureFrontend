# TagsApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**tagsCreate**](#tagscreate) | **POST** /api/v1/tags/ | |
|[**tagsDestroy**](#tagsdestroy) | **DELETE** /api/v1/tags/{id}/ | |
|[**tagsList**](#tagslist) | **GET** /api/v1/tags/ | |
|[**tagsPartialUpdate**](#tagspartialupdate) | **PATCH** /api/v1/tags/{id}/ | |
|[**tagsRetrieve**](#tagsretrieve) | **GET** /api/v1/tags/{id}/ | |
|[**tagsUpdate**](#tagsupdate) | **PUT** /api/v1/tags/{id}/ | |

# **tagsCreate**
> Tag tagsCreate(tag)


### Example

```typescript
import {
    TagsApi,
    Configuration,
    Tag
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tag: Tag; //

const { status, data } = await apiInstance.tagsCreate(
    tag
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tag** | **Tag**|  | |


### Return type

**Tag**

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

# **tagsDestroy**
> tagsDestroy()


### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let id: number; //A unique integer value identifying this tag. (default to undefined)

const { status, data } = await apiInstance.tagsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this tag. | defaults to undefined|


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

# **tagsList**
> PaginatedTagList tagsList()


### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.tagsList(
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

**PaginatedTagList**

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

# **tagsPartialUpdate**
> Tag tagsPartialUpdate()


### Example

```typescript
import {
    TagsApi,
    Configuration,
    PatchedTag
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let id: number; //A unique integer value identifying this tag. (default to undefined)
let patchedTag: PatchedTag; // (optional)

const { status, data } = await apiInstance.tagsPartialUpdate(
    id,
    patchedTag
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedTag** | **PatchedTag**|  | |
| **id** | [**number**] | A unique integer value identifying this tag. | defaults to undefined|


### Return type

**Tag**

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

# **tagsRetrieve**
> Tag tagsRetrieve()


### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let id: number; //A unique integer value identifying this tag. (default to undefined)

const { status, data } = await apiInstance.tagsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this tag. | defaults to undefined|


### Return type

**Tag**

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

# **tagsUpdate**
> Tag tagsUpdate(tag)


### Example

```typescript
import {
    TagsApi,
    Configuration,
    Tag
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let id: number; //A unique integer value identifying this tag. (default to undefined)
let tag: Tag; //

const { status, data } = await apiInstance.tagsUpdate(
    id,
    tag
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tag** | **Tag**|  | |
| **id** | [**number**] | A unique integer value identifying this tag. | defaults to undefined|


### Return type

**Tag**

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

