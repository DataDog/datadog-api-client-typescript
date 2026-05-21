import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ActionQuery } from "./ActionQuery";
import { ActionQueryMockedOutputsObject } from "./ActionQueryMockedOutputsObject";
import { ActionQueryProperties } from "./ActionQueryProperties";
import { ActionQuerySpecConnectionGroup } from "./ActionQuerySpecConnectionGroup";
import { ActionQuerySpecObject } from "./ActionQuerySpecObject";
import { AppBuilderEvent } from "./AppBuilderEvent";
import { AppBuilderListTagsResponse } from "./AppBuilderListTagsResponse";
import { AppMeta } from "./AppMeta";
import { AppRelationship } from "./AppRelationship";
import { AppVersion } from "./AppVersion";
import { AppVersionAttributes } from "./AppVersionAttributes";
import { BlueprintAttributes } from "./BlueprintAttributes";
import { BlueprintData } from "./BlueprintData";
import { BlueprintMetadataAttributes } from "./BlueprintMetadataAttributes";
import { BlueprintMetadataData } from "./BlueprintMetadataData";
import { Component } from "./Component";
import { ComponentGrid } from "./ComponentGrid";
import { ComponentGridProperties } from "./ComponentGridProperties";
import { ComponentProperties } from "./ComponentProperties";
import { CreateAppRequest } from "./CreateAppRequest";
import { CreateAppRequestData } from "./CreateAppRequestData";
import { CreateAppRequestDataAttributes } from "./CreateAppRequestDataAttributes";
import { CreateAppResponse } from "./CreateAppResponse";
import { CreateAppResponseData } from "./CreateAppResponseData";
import { CreatePublishRequestRequest } from "./CreatePublishRequestRequest";
import { CreatePublishRequestRequestData } from "./CreatePublishRequestRequestData";
import { CreatePublishRequestRequestDataAttributes } from "./CreatePublishRequestRequestDataAttributes";
import { CustomConnection } from "./CustomConnection";
import { CustomConnectionAttributes } from "./CustomConnectionAttributes";
import { CustomConnectionAttributesOnPremRunner } from "./CustomConnectionAttributesOnPremRunner";
import { DataTransform } from "./DataTransform";
import { DataTransformProperties } from "./DataTransformProperties";
import { DeleteAppResponse } from "./DeleteAppResponse";
import { DeleteAppResponseData } from "./DeleteAppResponseData";
import { DeleteAppsRequest } from "./DeleteAppsRequest";
import { DeleteAppsRequestDataItems } from "./DeleteAppsRequestDataItems";
import { DeleteAppsResponse } from "./DeleteAppsResponse";
import { DeleteAppsResponseDataItems } from "./DeleteAppsResponseDataItems";
import { Deployment } from "./Deployment";
import { DeploymentAttributes } from "./DeploymentAttributes";
import { DeploymentMetadata } from "./DeploymentMetadata";
import { DeploymentRelationship } from "./DeploymentRelationship";
import { DeploymentRelationshipData } from "./DeploymentRelationshipData";
import { GetAppResponse } from "./GetAppResponse";
import { GetAppResponseData } from "./GetAppResponseData";
import { GetAppResponseDataAttributes } from "./GetAppResponseDataAttributes";
import { GetBlueprintResponse } from "./GetBlueprintResponse";
import { GetBlueprintsResponse } from "./GetBlueprintsResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ListAppVersionsResponse } from "./ListAppVersionsResponse";
import { ListAppsResponse } from "./ListAppsResponse";
import { ListAppsResponseDataItems } from "./ListAppsResponseDataItems";
import { ListAppsResponseDataItemsAttributes } from "./ListAppsResponseDataItemsAttributes";
import { ListAppsResponseDataItemsRelationships } from "./ListAppsResponseDataItemsRelationships";
import { ListAppsResponseMeta } from "./ListAppsResponseMeta";
import { ListAppsResponseMetaPage } from "./ListAppsResponseMetaPage";
import { ListBlueprintsResponse } from "./ListBlueprintsResponse";
import { PublishAppResponse } from "./PublishAppResponse";
import { StateVariable } from "./StateVariable";
import { StateVariableProperties } from "./StateVariableProperties";
import { TagData } from "./TagData";
import { UnpublishAppResponse } from "./UnpublishAppResponse";
import { UpdateAppFavoriteRequest } from "./UpdateAppFavoriteRequest";
import { UpdateAppFavoriteRequestData } from "./UpdateAppFavoriteRequestData";
import { UpdateAppFavoriteRequestDataAttributes } from "./UpdateAppFavoriteRequestDataAttributes";
import { UpdateAppProtectionLevelRequest } from "./UpdateAppProtectionLevelRequest";
import { UpdateAppProtectionLevelRequestData } from "./UpdateAppProtectionLevelRequestData";
import { UpdateAppProtectionLevelRequestDataAttributes } from "./UpdateAppProtectionLevelRequestDataAttributes";
import { UpdateAppRequest } from "./UpdateAppRequest";
import { UpdateAppRequestData } from "./UpdateAppRequestData";
import { UpdateAppRequestDataAttributes } from "./UpdateAppRequestDataAttributes";
import { UpdateAppResponse } from "./UpdateAppResponse";
import { UpdateAppResponseData } from "./UpdateAppResponseData";
import { UpdateAppResponseDataAttributes } from "./UpdateAppResponseDataAttributes";
import { UpdateAppSelfServiceRequest } from "./UpdateAppSelfServiceRequest";
import { UpdateAppSelfServiceRequestData } from "./UpdateAppSelfServiceRequestData";
import { UpdateAppSelfServiceRequestDataAttributes } from "./UpdateAppSelfServiceRequestDataAttributes";
import { UpdateAppTagsRequest } from "./UpdateAppTagsRequest";
import { UpdateAppTagsRequestData } from "./UpdateAppTagsRequestData";
import { UpdateAppTagsRequestDataAttributes } from "./UpdateAppTagsRequestDataAttributes";
import { UpdateAppVersionNameRequest } from "./UpdateAppVersionNameRequest";
import { UpdateAppVersionNameRequestData } from "./UpdateAppVersionNameRequestData";
import { UpdateAppVersionNameRequestDataAttributes } from "./UpdateAppVersionNameRequestDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ActionQueryType: ["action"],
    AppBuilderEventName: [
      "pageChange",
      "tableRowClick",
      "_tableRowButtonClick",
      "change",
      "submit",
      "click",
      "toggleOpen",
      "close",
      "open",
      "executionFinished",
    ],
    AppBuilderEventType: [
      "custom",
      "setComponentState",
      "triggerQuery",
      "openModal",
      "closeModal",
      "openUrl",
      "downloadFile",
      "setStateVariableValue",
    ],
    AppDefinitionType: ["appDefinitions"],
    AppDeploymentType: ["deployment"],
    AppFavoriteType: ["favorites"],
    AppProtectionLevel: ["direct_publish", "approval_required"],
    AppProtectionLevelType: ["protectionLevel"],
    AppSelfServiceType: ["selfService"],
    AppTagsType: ["tags"],
    AppVersionNameType: ["versionNames"],
    AppVersionType: ["appVersions"],
    AppsSortField: [
      "name",
      "created_at",
      "updated_at",
      "user_name",
      "-name",
      "-created_at",
      "-updated_at",
      "-user_name",
    ],
    BlueprintDataType: ["blueprint"],
    ComponentGridType: ["grid"],
    ComponentType: [
      "table",
      "textInput",
      "textArea",
      "button",
      "text",
      "select",
      "modal",
      "schemaForm",
      "checkbox",
      "tabs",
      "vegaChart",
      "radioButtons",
      "numberInput",
      "fileInput",
      "jsonInput",
      "gridCell",
      "dateRangePicker",
      "search",
      "container",
      "calloutValue",
    ],
    CustomConnectionType: ["custom_connections"],
    DataTransformType: ["dataTransform"],
    PublishRequestType: ["publishRequest"],
    StateVariableType: ["stateVariable"],
    TagDataType: ["tag"],
  },
  oneOfMap: {
    ActionQueryCondition: ["boolean", "string"],
    ActionQueryDebounceInMs: ["number", "string"],
    ActionQueryMockedOutputs: ["string", "ActionQueryMockedOutputsObject"],
    ActionQueryMockedOutputsEnabled: ["boolean", "string"],
    ActionQueryOnlyTriggerManually: ["boolean", "string"],
    ActionQueryPollingIntervalInMs: ["number", "string"],
    ActionQueryRequiresConfirmation: ["boolean", "string"],
    ActionQueryShowToastOnError: ["boolean", "string"],
    ActionQuerySpec: ["string", "ActionQuerySpecObject"],
    ActionQuerySpecInputs: ["string", "{ [key: string]: any; }"],
    ComponentGridPropertiesIsVisible: ["string", "boolean"],
    ComponentPropertiesIsVisible: ["boolean", "string"],
    Query: ["ActionQuery", "DataTransform", "StateVariable"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ActionQuery: ActionQuery,
    ActionQueryMockedOutputsObject: ActionQueryMockedOutputsObject,
    ActionQueryProperties: ActionQueryProperties,
    ActionQuerySpecConnectionGroup: ActionQuerySpecConnectionGroup,
    ActionQuerySpecObject: ActionQuerySpecObject,
    AppBuilderEvent: AppBuilderEvent,
    AppBuilderListTagsResponse: AppBuilderListTagsResponse,
    AppMeta: AppMeta,
    AppRelationship: AppRelationship,
    AppVersion: AppVersion,
    AppVersionAttributes: AppVersionAttributes,
    BlueprintAttributes: BlueprintAttributes,
    BlueprintData: BlueprintData,
    BlueprintMetadataAttributes: BlueprintMetadataAttributes,
    BlueprintMetadataData: BlueprintMetadataData,
    Component: Component,
    ComponentGrid: ComponentGrid,
    ComponentGridProperties: ComponentGridProperties,
    ComponentProperties: ComponentProperties,
    CreateAppRequest: CreateAppRequest,
    CreateAppRequestData: CreateAppRequestData,
    CreateAppRequestDataAttributes: CreateAppRequestDataAttributes,
    CreateAppResponse: CreateAppResponse,
    CreateAppResponseData: CreateAppResponseData,
    CreatePublishRequestRequest: CreatePublishRequestRequest,
    CreatePublishRequestRequestData: CreatePublishRequestRequestData,
    CreatePublishRequestRequestDataAttributes:
      CreatePublishRequestRequestDataAttributes,
    CustomConnection: CustomConnection,
    CustomConnectionAttributes: CustomConnectionAttributes,
    CustomConnectionAttributesOnPremRunner:
      CustomConnectionAttributesOnPremRunner,
    DataTransform: DataTransform,
    DataTransformProperties: DataTransformProperties,
    DeleteAppResponse: DeleteAppResponse,
    DeleteAppResponseData: DeleteAppResponseData,
    DeleteAppsRequest: DeleteAppsRequest,
    DeleteAppsRequestDataItems: DeleteAppsRequestDataItems,
    DeleteAppsResponse: DeleteAppsResponse,
    DeleteAppsResponseDataItems: DeleteAppsResponseDataItems,
    Deployment: Deployment,
    DeploymentAttributes: DeploymentAttributes,
    DeploymentMetadata: DeploymentMetadata,
    DeploymentRelationship: DeploymentRelationship,
    DeploymentRelationshipData: DeploymentRelationshipData,
    GetAppResponse: GetAppResponse,
    GetAppResponseData: GetAppResponseData,
    GetAppResponseDataAttributes: GetAppResponseDataAttributes,
    GetBlueprintResponse: GetBlueprintResponse,
    GetBlueprintsResponse: GetBlueprintsResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ListAppVersionsResponse: ListAppVersionsResponse,
    ListAppsResponse: ListAppsResponse,
    ListAppsResponseDataItems: ListAppsResponseDataItems,
    ListAppsResponseDataItemsAttributes: ListAppsResponseDataItemsAttributes,
    ListAppsResponseDataItemsRelationships:
      ListAppsResponseDataItemsRelationships,
    ListAppsResponseMeta: ListAppsResponseMeta,
    ListAppsResponseMetaPage: ListAppsResponseMetaPage,
    ListBlueprintsResponse: ListBlueprintsResponse,
    PublishAppResponse: PublishAppResponse,
    StateVariable: StateVariable,
    StateVariableProperties: StateVariableProperties,
    TagData: TagData,
    UnpublishAppResponse: UnpublishAppResponse,
    UpdateAppFavoriteRequest: UpdateAppFavoriteRequest,
    UpdateAppFavoriteRequestData: UpdateAppFavoriteRequestData,
    UpdateAppFavoriteRequestDataAttributes:
      UpdateAppFavoriteRequestDataAttributes,
    UpdateAppProtectionLevelRequest: UpdateAppProtectionLevelRequest,
    UpdateAppProtectionLevelRequestData: UpdateAppProtectionLevelRequestData,
    UpdateAppProtectionLevelRequestDataAttributes:
      UpdateAppProtectionLevelRequestDataAttributes,
    UpdateAppRequest: UpdateAppRequest,
    UpdateAppRequestData: UpdateAppRequestData,
    UpdateAppRequestDataAttributes: UpdateAppRequestDataAttributes,
    UpdateAppResponse: UpdateAppResponse,
    UpdateAppResponseData: UpdateAppResponseData,
    UpdateAppResponseDataAttributes: UpdateAppResponseDataAttributes,
    UpdateAppSelfServiceRequest: UpdateAppSelfServiceRequest,
    UpdateAppSelfServiceRequestData: UpdateAppSelfServiceRequestData,
    UpdateAppSelfServiceRequestDataAttributes:
      UpdateAppSelfServiceRequestDataAttributes,
    UpdateAppTagsRequest: UpdateAppTagsRequest,
    UpdateAppTagsRequestData: UpdateAppTagsRequestData,
    UpdateAppTagsRequestDataAttributes: UpdateAppTagsRequestDataAttributes,
    UpdateAppVersionNameRequest: UpdateAppVersionNameRequest,
    UpdateAppVersionNameRequestData: UpdateAppVersionNameRequestData,
    UpdateAppVersionNameRequestDataAttributes:
      UpdateAppVersionNameRequestDataAttributes,
  },
};
