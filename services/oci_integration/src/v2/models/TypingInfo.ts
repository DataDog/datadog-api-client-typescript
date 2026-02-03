import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreateTenancyConfigData } from "./CreateTenancyConfigData";
import { CreateTenancyConfigDataAttributes } from "./CreateTenancyConfigDataAttributes";
import { CreateTenancyConfigDataAttributesAuthCredentials } from "./CreateTenancyConfigDataAttributesAuthCredentials";
import { CreateTenancyConfigDataAttributesLogsConfig } from "./CreateTenancyConfigDataAttributesLogsConfig";
import { CreateTenancyConfigDataAttributesMetricsConfig } from "./CreateTenancyConfigDataAttributesMetricsConfig";
import { CreateTenancyConfigDataAttributesRegionsConfig } from "./CreateTenancyConfigDataAttributesRegionsConfig";
import { CreateTenancyConfigRequest } from "./CreateTenancyConfigRequest";
import { TenancyConfig } from "./TenancyConfig";
import { TenancyConfigData } from "./TenancyConfigData";
import { TenancyConfigDataAttributes } from "./TenancyConfigDataAttributes";
import { TenancyConfigDataAttributesLogsConfig } from "./TenancyConfigDataAttributesLogsConfig";
import { TenancyConfigDataAttributesMetricsConfig } from "./TenancyConfigDataAttributesMetricsConfig";
import { TenancyConfigDataAttributesRegionsConfig } from "./TenancyConfigDataAttributesRegionsConfig";
import { TenancyConfigList } from "./TenancyConfigList";
import { TenancyProductsData } from "./TenancyProductsData";
import { TenancyProductsDataAttributes } from "./TenancyProductsDataAttributes";
import { TenancyProductsDataAttributesProductsItems } from "./TenancyProductsDataAttributesProductsItems";
import { TenancyProductsList } from "./TenancyProductsList";
import { UpdateTenancyConfigData } from "./UpdateTenancyConfigData";
import { UpdateTenancyConfigDataAttributes } from "./UpdateTenancyConfigDataAttributes";
import { UpdateTenancyConfigDataAttributesAuthCredentials } from "./UpdateTenancyConfigDataAttributesAuthCredentials";
import { UpdateTenancyConfigDataAttributesLogsConfig } from "./UpdateTenancyConfigDataAttributesLogsConfig";
import { UpdateTenancyConfigDataAttributesMetricsConfig } from "./UpdateTenancyConfigDataAttributesMetricsConfig";
import { UpdateTenancyConfigDataAttributesRegionsConfig } from "./UpdateTenancyConfigDataAttributesRegionsConfig";
import { UpdateTenancyConfigRequest } from "./UpdateTenancyConfigRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    TenancyProductsDataType: ["oci_tenancy_product"],
    UpdateTenancyConfigDataType: ["oci_tenancy"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CreateTenancyConfigData: CreateTenancyConfigData,
    CreateTenancyConfigDataAttributes: CreateTenancyConfigDataAttributes,
    CreateTenancyConfigDataAttributesAuthCredentials:
      CreateTenancyConfigDataAttributesAuthCredentials,
    CreateTenancyConfigDataAttributesLogsConfig:
      CreateTenancyConfigDataAttributesLogsConfig,
    CreateTenancyConfigDataAttributesMetricsConfig:
      CreateTenancyConfigDataAttributesMetricsConfig,
    CreateTenancyConfigDataAttributesRegionsConfig:
      CreateTenancyConfigDataAttributesRegionsConfig,
    CreateTenancyConfigRequest: CreateTenancyConfigRequest,
    TenancyConfig: TenancyConfig,
    TenancyConfigData: TenancyConfigData,
    TenancyConfigDataAttributes: TenancyConfigDataAttributes,
    TenancyConfigDataAttributesLogsConfig:
      TenancyConfigDataAttributesLogsConfig,
    TenancyConfigDataAttributesMetricsConfig:
      TenancyConfigDataAttributesMetricsConfig,
    TenancyConfigDataAttributesRegionsConfig:
      TenancyConfigDataAttributesRegionsConfig,
    TenancyConfigList: TenancyConfigList,
    TenancyProductsData: TenancyProductsData,
    TenancyProductsDataAttributes: TenancyProductsDataAttributes,
    TenancyProductsDataAttributesProductsItems:
      TenancyProductsDataAttributesProductsItems,
    TenancyProductsList: TenancyProductsList,
    UpdateTenancyConfigData: UpdateTenancyConfigData,
    UpdateTenancyConfigDataAttributes: UpdateTenancyConfigDataAttributes,
    UpdateTenancyConfigDataAttributesAuthCredentials:
      UpdateTenancyConfigDataAttributesAuthCredentials,
    UpdateTenancyConfigDataAttributesLogsConfig:
      UpdateTenancyConfigDataAttributesLogsConfig,
    UpdateTenancyConfigDataAttributesMetricsConfig:
      UpdateTenancyConfigDataAttributesMetricsConfig,
    UpdateTenancyConfigDataAttributesRegionsConfig:
      UpdateTenancyConfigDataAttributesRegionsConfig,
    UpdateTenancyConfigRequest: UpdateTenancyConfigRequest,
  },
};
