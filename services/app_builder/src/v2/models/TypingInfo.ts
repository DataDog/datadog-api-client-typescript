import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ActionQuery } from "./ActionQuery";
import { ActionQueryMockedOutputsObject } from "./ActionQueryMockedOutputsObject";
import { ActionQueryProperties } from "./ActionQueryProperties";
import { ActionQuerySpecConnectionGroup } from "./ActionQuerySpecConnectionGroup";
import { ActionQuerySpecObject } from "./ActionQuerySpecObject";
import { AppBuilderEvent } from "./AppBuilderEvent";
import { AppMeta } from "./AppMeta";
import { AppRelationship } from "./AppRelationship";
import { Component } from "./Component";
import { ComponentGrid } from "./ComponentGrid";
import { ComponentGridProperties } from "./ComponentGridProperties";
import { ComponentProperties } from "./ComponentProperties";
import { CreateAppRequest } from "./CreateAppRequest";
import { CreateAppRequestData } from "./CreateAppRequestData";
import { CreateAppRequestDataAttributes } from "./CreateAppRequestDataAttributes";
import { CreateAppResponse } from "./CreateAppResponse";
import { CreateAppResponseData } from "./CreateAppResponseData";
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
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ListAppsResponse } from "./ListAppsResponse";
import { ListAppsResponseDataItems } from "./ListAppsResponseDataItems";
import { ListAppsResponseDataItemsAttributes } from "./ListAppsResponseDataItemsAttributes";
import { ListAppsResponseDataItemsRelationships } from "./ListAppsResponseDataItemsRelationships";
import { ListAppsResponseMeta } from "./ListAppsResponseMeta";
import { ListAppsResponseMetaPage } from "./ListAppsResponseMetaPage";
import { PublishAppResponse } from "./PublishAppResponse";
import { StateVariable } from "./StateVariable";
import { StateVariableProperties } from "./StateVariableProperties";
import { UnpublishAppResponse } from "./UnpublishAppResponse";
import { UpdateAppRequest } from "./UpdateAppRequest";
import { UpdateAppRequestData } from "./UpdateAppRequestData";
import { UpdateAppRequestDataAttributes } from "./UpdateAppRequestDataAttributes";
import { UpdateAppResponse } from "./UpdateAppResponse";
import { UpdateAppResponseData } from "./UpdateAppResponseData";
import { UpdateAppResponseDataAttributes } from "./UpdateAppResponseDataAttributes";

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
    StateVariableType: ["stateVariable"],
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
    AppMeta: AppMeta,
    AppRelationship: AppRelationship,
    Component: Component,
    ComponentGrid: ComponentGrid,
    ComponentGridProperties: ComponentGridProperties,
    ComponentProperties: ComponentProperties,
    CreateAppRequest: CreateAppRequest,
    CreateAppRequestData: CreateAppRequestData,
    CreateAppRequestDataAttributes: CreateAppRequestDataAttributes,
    CreateAppResponse: CreateAppResponse,
    CreateAppResponseData: CreateAppResponseData,
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
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ListAppsResponse: ListAppsResponse,
    ListAppsResponseDataItems: ListAppsResponseDataItems,
    ListAppsResponseDataItemsAttributes: ListAppsResponseDataItemsAttributes,
    ListAppsResponseDataItemsRelationships:
      ListAppsResponseDataItemsRelationships,
    ListAppsResponseMeta: ListAppsResponseMeta,
    ListAppsResponseMetaPage: ListAppsResponseMetaPage,
    PublishAppResponse: PublishAppResponse,
    StateVariable: StateVariable,
    StateVariableProperties: StateVariableProperties,
    UnpublishAppResponse: UnpublishAppResponse,
    UpdateAppRequest: UpdateAppRequest,
    UpdateAppRequestData: UpdateAppRequestData,
    UpdateAppRequestDataAttributes: UpdateAppRequestDataAttributes,
    UpdateAppResponse: UpdateAppResponse,
    UpdateAppResponseData: UpdateAppResponseData,
    UpdateAppResponseDataAttributes: UpdateAppResponseDataAttributes,
  },
};
