# DashboardMetricsApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**dashboardMetricsList**](#dashboardmetricslist) | **GET** /api/v1/dashboard-metrics/ | |
|[**dashboardMetricsRetrieve**](#dashboardmetricsretrieve) | **GET** /api/v1/dashboard-metrics/{id}/ | |

# **dashboardMetricsList**
> PaginatedDashboardMetricList dashboardMetricsList()

Read-only metrics for dashboards.

### Example

```typescript
import {
    DashboardMetricsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardMetricsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.dashboardMetricsList(
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

**PaginatedDashboardMetricList**

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

# **dashboardMetricsRetrieve**
> DashboardMetric dashboardMetricsRetrieve()

Read-only metrics for dashboards.

### Example

```typescript
import {
    DashboardMetricsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DashboardMetricsApi(configuration);

let id: number; //A unique integer value identifying this dashboard metric. (default to undefined)

const { status, data } = await apiInstance.dashboardMetricsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this dashboard metric. | defaults to undefined|


### Return type

**DashboardMetric**

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

