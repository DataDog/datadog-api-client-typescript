import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreateEnvironmentAttributes } from "./CreateEnvironmentAttributes";
import { CreateEnvironmentData } from "./CreateEnvironmentData";
import { CreateEnvironmentRequest } from "./CreateEnvironmentRequest";
import { CreateFeatureFlagAttributes } from "./CreateFeatureFlagAttributes";
import { CreateFeatureFlagData } from "./CreateFeatureFlagData";
import { CreateFeatureFlagRequest } from "./CreateFeatureFlagRequest";
import { CreateVariant } from "./CreateVariant";
import { Environment } from "./Environment";
import { EnvironmentAttributes } from "./EnvironmentAttributes";
import { EnvironmentResponse } from "./EnvironmentResponse";
import { EnvironmentsPaginationMeta } from "./EnvironmentsPaginationMeta";
import { EnvironmentsPaginationMetaPage } from "./EnvironmentsPaginationMetaPage";
import { FeatureFlag } from "./FeatureFlag";
import { FeatureFlagAttributes } from "./FeatureFlagAttributes";
import { FeatureFlagEnvironment } from "./FeatureFlagEnvironment";
import { FeatureFlagResponse } from "./FeatureFlagResponse";
import { FeatureFlagsPaginationMeta } from "./FeatureFlagsPaginationMeta";
import { FeatureFlagsPaginationMetaPage } from "./FeatureFlagsPaginationMetaPage";
import { ListEnvironmentsResponse } from "./ListEnvironmentsResponse";
import { ListFeatureFlagsResponse } from "./ListFeatureFlagsResponse";
import { UpdateEnvironmentAttributes } from "./UpdateEnvironmentAttributes";
import { UpdateEnvironmentData } from "./UpdateEnvironmentData";
import { UpdateEnvironmentRequest } from "./UpdateEnvironmentRequest";
import { UpdateFeatureFlagAttributes } from "./UpdateFeatureFlagAttributes";
import { UpdateFeatureFlagData } from "./UpdateFeatureFlagData";
import { UpdateFeatureFlagRequest } from "./UpdateFeatureFlagRequest";
import { Variant } from "./Variant";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CreateEnvironmentDataType: ["environments"],
    CreateFeatureFlagDataType: ["feature-flags"],
    FeatureFlagStatus: ["ENABLED", "DISABLED"],
    UpdateEnvironmentDataType: ["environments"],
    UpdateFeatureFlagDataType: ["feature-flags"],
    ValueType: ["BOOLEAN", "INTEGER", "NUMERIC", "STRING", "JSON"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CreateEnvironmentAttributes: CreateEnvironmentAttributes,
    CreateEnvironmentData: CreateEnvironmentData,
    CreateEnvironmentRequest: CreateEnvironmentRequest,
    CreateFeatureFlagAttributes: CreateFeatureFlagAttributes,
    CreateFeatureFlagData: CreateFeatureFlagData,
    CreateFeatureFlagRequest: CreateFeatureFlagRequest,
    CreateVariant: CreateVariant,
    Environment: Environment,
    EnvironmentAttributes: EnvironmentAttributes,
    EnvironmentResponse: EnvironmentResponse,
    EnvironmentsPaginationMeta: EnvironmentsPaginationMeta,
    EnvironmentsPaginationMetaPage: EnvironmentsPaginationMetaPage,
    FeatureFlag: FeatureFlag,
    FeatureFlagAttributes: FeatureFlagAttributes,
    FeatureFlagEnvironment: FeatureFlagEnvironment,
    FeatureFlagResponse: FeatureFlagResponse,
    FeatureFlagsPaginationMeta: FeatureFlagsPaginationMeta,
    FeatureFlagsPaginationMetaPage: FeatureFlagsPaginationMetaPage,
    ListEnvironmentsResponse: ListEnvironmentsResponse,
    ListFeatureFlagsResponse: ListFeatureFlagsResponse,
    UpdateEnvironmentAttributes: UpdateEnvironmentAttributes,
    UpdateEnvironmentData: UpdateEnvironmentData,
    UpdateEnvironmentRequest: UpdateEnvironmentRequest,
    UpdateFeatureFlagAttributes: UpdateFeatureFlagAttributes,
    UpdateFeatureFlagData: UpdateFeatureFlagData,
    UpdateFeatureFlagRequest: UpdateFeatureFlagRequest,
    Variant: Variant,
  },
};
