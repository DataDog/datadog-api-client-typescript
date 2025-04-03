import {
  dateFromRFC3339String,
  dateToRFC3339String,
  UnparsedObject,
  logger,
} from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { APITrigger } from "./APITrigger";
import { APITriggerWrapper } from "./APITriggerWrapper";
import { Annotation } from "./Annotation";
import { AnnotationDisplay } from "./AnnotationDisplay";
import { AnnotationDisplayBounds } from "./AnnotationDisplayBounds";
import { AnnotationMarkdownTextAnnotation } from "./AnnotationMarkdownTextAnnotation";
import { AppTriggerWrapper } from "./AppTriggerWrapper";
import { CaseTrigger } from "./CaseTrigger";
import { CaseTriggerWrapper } from "./CaseTriggerWrapper";
import { ChangeEventTriggerWrapper } from "./ChangeEventTriggerWrapper";
import { CompletionCondition } from "./CompletionCondition";
import { CompletionGate } from "./CompletionGate";
import { Connection } from "./Connection";
import { ConnectionEnv } from "./ConnectionEnv";
import { ConnectionGroup } from "./ConnectionGroup";
import { CreateWorkflowRequest } from "./CreateWorkflowRequest";
import { CreateWorkflowResponse } from "./CreateWorkflowResponse";
import { DashboardTriggerWrapper } from "./DashboardTriggerWrapper";
import { DatabaseMonitoringTriggerWrapper } from "./DatabaseMonitoringTriggerWrapper";
import { ErrorHandler } from "./ErrorHandler";
import { GetWorkflowResponse } from "./GetWorkflowResponse";
import { GithubWebhookTrigger } from "./GithubWebhookTrigger";
import { GithubWebhookTriggerWrapper } from "./GithubWebhookTriggerWrapper";
import { IncidentTrigger } from "./IncidentTrigger";
import { IncidentTriggerWrapper } from "./IncidentTriggerWrapper";
import { InputSchema } from "./InputSchema";
import { InputSchemaParameters } from "./InputSchemaParameters";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { MonitorTrigger } from "./MonitorTrigger";
import { MonitorTriggerWrapper } from "./MonitorTriggerWrapper";
import { NotebookTriggerWrapper } from "./NotebookTriggerWrapper";
import { OutboundEdge } from "./OutboundEdge";
import { OutputSchema } from "./OutputSchema";
import { OutputSchemaParameters } from "./OutputSchemaParameters";
import { Parameter } from "./Parameter";
import { ReadinessGate } from "./ReadinessGate";
import { RetryStrategy } from "./RetryStrategy";
import { RetryStrategyLinear } from "./RetryStrategyLinear";
import { ScheduleTrigger } from "./ScheduleTrigger";
import { ScheduleTriggerWrapper } from "./ScheduleTriggerWrapper";
import { SecurityTrigger } from "./SecurityTrigger";
import { SecurityTriggerWrapper } from "./SecurityTriggerWrapper";
import { SelfServiceTriggerWrapper } from "./SelfServiceTriggerWrapper";
import { SlackTriggerWrapper } from "./SlackTriggerWrapper";
import { SoftwareCatalogTriggerWrapper } from "./SoftwareCatalogTriggerWrapper";
import { Spec } from "./Spec";
import { Step } from "./Step";
import { StepDisplay } from "./StepDisplay";
import { StepDisplayBounds } from "./StepDisplayBounds";
import { TriggerRateLimit } from "./TriggerRateLimit";
import { UpdateWorkflowRequest } from "./UpdateWorkflowRequest";
import { UpdateWorkflowResponse } from "./UpdateWorkflowResponse";
import { WorkflowData } from "./WorkflowData";
import { WorkflowDataAttributes } from "./WorkflowDataAttributes";
import { WorkflowDataRelationships } from "./WorkflowDataRelationships";
import { WorkflowDataUpdate } from "./WorkflowDataUpdate";
import { WorkflowDataUpdateAttributes } from "./WorkflowDataUpdateAttributes";
import { WorkflowInstanceCreateMeta } from "./WorkflowInstanceCreateMeta";
import { WorkflowInstanceCreateRequest } from "./WorkflowInstanceCreateRequest";
import { WorkflowInstanceCreateResponse } from "./WorkflowInstanceCreateResponse";
import { WorkflowInstanceCreateResponseData } from "./WorkflowInstanceCreateResponseData";
import { WorkflowInstanceListItem } from "./WorkflowInstanceListItem";
import { WorkflowListInstancesResponse } from "./WorkflowListInstancesResponse";
import { WorkflowListInstancesResponseMeta } from "./WorkflowListInstancesResponseMeta";
import { WorkflowListInstancesResponseMetaPage } from "./WorkflowListInstancesResponseMetaPage";
import { WorkflowTriggerWrapper } from "./WorkflowTriggerWrapper";
import { WorkflowUserRelationship } from "./WorkflowUserRelationship";
import { WorkflowUserRelationshipData } from "./WorkflowUserRelationshipData";
import { WorklflowCancelInstanceResponse } from "./WorklflowCancelInstanceResponse";
import { WorklflowCancelInstanceResponseData } from "./WorklflowCancelInstanceResponseData";
import { WorklflowGetInstanceResponse } from "./WorklflowGetInstanceResponse";
import { WorklflowGetInstanceResponseData } from "./WorklflowGetInstanceResponseData";
import { WorklflowGetInstanceResponseDataAttributes } from "./WorklflowGetInstanceResponseDataAttributes";

const primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
];

const ARRAY_PREFIX = "Array<";
const MAP_PREFIX = "{ [key: string]: ";
const TUPLE_PREFIX = "[";

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "text/json": 100,
  "application/octet-stream": 0,
};

const enumsMap: { [key: string]: any[] } = {
  CompletionConditionOperator: [
    "OPERATOR_EQUAL",
    "OPERATOR_NOT_EQUAL",
    "OPERATOR_GREATER_THAN",
    "OPERATOR_LESS_THAN",
    "OPERATOR_GREATER_THAN_OR_EQUAL_TO",
    "OPERATOR_LESS_THAN_OR_EQUAL_TO",
    "OPERATOR_CONTAINS",
    "OPERATOR_DOES_NOT_CONTAIN",
    "OPERATOR_IS_NULL",
    "OPERATOR_IS_NOT_NULL",
    "OPERATOR_IS_EMPTY",
    "OPERATOR_IS_NOT_EMPTY",
  ],
  ConnectionEnvEnv: ["default"],
  InputSchemaParametersType: [
    "STRING",
    "NUMBER",
    "BOOLEAN",
    "OBJECT",
    "ARRAY_STRING",
    "ARRAY_NUMBER",
    "ARRAY_BOOLEAN",
    "ARRAY_OBJECT",
  ],
  OutputSchemaParametersType: [
    "STRING",
    "NUMBER",
    "BOOLEAN",
    "OBJECT",
    "ARRAY_STRING",
    "ARRAY_NUMBER",
    "ARRAY_BOOLEAN",
    "ARRAY_OBJECT",
  ],
  ReadinessGateThresholdType: ["ANY", "ALL"],
  RetryStrategyKind: ["RETRY_STRATEGY_LINEAR"],
  WorkflowDataType: ["workflows"],
  WorkflowUserRelationshipType: ["users"],
};

const typeMap: { [index: string]: any } = {
  APIErrorResponse: APIErrorResponse,
  APITrigger: APITrigger,
  APITriggerWrapper: APITriggerWrapper,
  Annotation: Annotation,
  AnnotationDisplay: AnnotationDisplay,
  AnnotationDisplayBounds: AnnotationDisplayBounds,
  AnnotationMarkdownTextAnnotation: AnnotationMarkdownTextAnnotation,
  AppTriggerWrapper: AppTriggerWrapper,
  CaseTrigger: CaseTrigger,
  CaseTriggerWrapper: CaseTriggerWrapper,
  ChangeEventTriggerWrapper: ChangeEventTriggerWrapper,
  CompletionCondition: CompletionCondition,
  CompletionGate: CompletionGate,
  Connection: Connection,
  ConnectionEnv: ConnectionEnv,
  ConnectionGroup: ConnectionGroup,
  CreateWorkflowRequest: CreateWorkflowRequest,
  CreateWorkflowResponse: CreateWorkflowResponse,
  DashboardTriggerWrapper: DashboardTriggerWrapper,
  DatabaseMonitoringTriggerWrapper: DatabaseMonitoringTriggerWrapper,
  ErrorHandler: ErrorHandler,
  GetWorkflowResponse: GetWorkflowResponse,
  GithubWebhookTrigger: GithubWebhookTrigger,
  GithubWebhookTriggerWrapper: GithubWebhookTriggerWrapper,
  IncidentTrigger: IncidentTrigger,
  IncidentTriggerWrapper: IncidentTriggerWrapper,
  InputSchema: InputSchema,
  InputSchemaParameters: InputSchemaParameters,
  JSONAPIErrorItem: JSONAPIErrorItem,
  JSONAPIErrorItemSource: JSONAPIErrorItemSource,
  JSONAPIErrorResponse: JSONAPIErrorResponse,
  MonitorTrigger: MonitorTrigger,
  MonitorTriggerWrapper: MonitorTriggerWrapper,
  NotebookTriggerWrapper: NotebookTriggerWrapper,
  OutboundEdge: OutboundEdge,
  OutputSchema: OutputSchema,
  OutputSchemaParameters: OutputSchemaParameters,
  Parameter: Parameter,
  ReadinessGate: ReadinessGate,
  RetryStrategy: RetryStrategy,
  RetryStrategyLinear: RetryStrategyLinear,
  ScheduleTrigger: ScheduleTrigger,
  ScheduleTriggerWrapper: ScheduleTriggerWrapper,
  SecurityTrigger: SecurityTrigger,
  SecurityTriggerWrapper: SecurityTriggerWrapper,
  SelfServiceTriggerWrapper: SelfServiceTriggerWrapper,
  SlackTriggerWrapper: SlackTriggerWrapper,
  SoftwareCatalogTriggerWrapper: SoftwareCatalogTriggerWrapper,
  Spec: Spec,
  Step: Step,
  StepDisplay: StepDisplay,
  StepDisplayBounds: StepDisplayBounds,
  TriggerRateLimit: TriggerRateLimit,
  UpdateWorkflowRequest: UpdateWorkflowRequest,
  UpdateWorkflowResponse: UpdateWorkflowResponse,
  WorkflowData: WorkflowData,
  WorkflowDataAttributes: WorkflowDataAttributes,
  WorkflowDataRelationships: WorkflowDataRelationships,
  WorkflowDataUpdate: WorkflowDataUpdate,
  WorkflowDataUpdateAttributes: WorkflowDataUpdateAttributes,
  WorkflowInstanceCreateMeta: WorkflowInstanceCreateMeta,
  WorkflowInstanceCreateRequest: WorkflowInstanceCreateRequest,
  WorkflowInstanceCreateResponse: WorkflowInstanceCreateResponse,
  WorkflowInstanceCreateResponseData: WorkflowInstanceCreateResponseData,
  WorkflowInstanceListItem: WorkflowInstanceListItem,
  WorkflowListInstancesResponse: WorkflowListInstancesResponse,
  WorkflowListInstancesResponseMeta: WorkflowListInstancesResponseMeta,
  WorkflowListInstancesResponseMetaPage: WorkflowListInstancesResponseMetaPage,
  WorkflowTriggerWrapper: WorkflowTriggerWrapper,
  WorkflowUserRelationship: WorkflowUserRelationship,
  WorkflowUserRelationshipData: WorkflowUserRelationshipData,
  WorklflowCancelInstanceResponse: WorklflowCancelInstanceResponse,
  WorklflowCancelInstanceResponseData: WorklflowCancelInstanceResponseData,
  WorklflowGetInstanceResponse: WorklflowGetInstanceResponse,
  WorklflowGetInstanceResponseData: WorklflowGetInstanceResponseData,
  WorklflowGetInstanceResponseDataAttributes:
    WorklflowGetInstanceResponseDataAttributes,
};

const oneOfMap: { [index: string]: string[] } = {
  Trigger: [
    "APITriggerWrapper",
    "AppTriggerWrapper",
    "CaseTriggerWrapper",
    "ChangeEventTriggerWrapper",
    "DatabaseMonitoringTriggerWrapper",
    "DashboardTriggerWrapper",
    "GithubWebhookTriggerWrapper",
    "IncidentTriggerWrapper",
    "MonitorTriggerWrapper",
    "NotebookTriggerWrapper",
    "ScheduleTriggerWrapper",
    "SecurityTriggerWrapper",
    "SelfServiceTriggerWrapper",
    "SlackTriggerWrapper",
    "SoftwareCatalogTriggerWrapper",
    "WorkflowTriggerWrapper",
  ],
};

export class ObjectSerializer {
  public static serialize(data: any, type: string, format: string): any {
    if (data == undefined || type == "any") {
      return data;
    } else if (data instanceof UnparsedObject) {
      return data._data;
    } else if (
      primitives.includes(type.toLowerCase()) &&
      typeof data == type.toLowerCase()
    ) {
      return data;
    } else if (type.startsWith(ARRAY_PREFIX)) {
      if (!Array.isArray(data)) {
        throw new TypeError(`mismatch types '${data}' and '${type}'`);
      }
      // Array<Type> => Type
      const subType: string = type.substring(
        ARRAY_PREFIX.length,
        type.length - 1,
      );
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.serialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(TUPLE_PREFIX)) {
      // We only support homegeneus tuples
      const subType: string = type
        .substring(TUPLE_PREFIX.length, type.length - 1)
        .split(", ")[0];
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.serialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3,
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.serialize(
          data[key],
          subType,
          format,
        );
      }
      return transformedData;
    } else if (type === "Date") {
      if ("string" == typeof data) {
        return data;
      }
      if (format == "date" || format == "date-time") {
        return dateToRFC3339String(data);
      } else {
        return data.toISOString();
      }
    } else {
      if (enumsMap[type]) {
        if (enumsMap[type].includes(data)) {
          return data;
        }
        throw new TypeError(`unknown enum value '${data}'`);
      }
      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            oneOfs.push(ObjectSerializer.serialize(data, oneOf, format));
          } catch (e) {
            logger.debug(`could not serialize ${oneOf} (${e})`);
          }
        }
        if (oneOfs.length > 1) {
          throw new TypeError(
            `${data} matches multiple types from ${oneOfMap[type]} ${oneOfs}`,
          );
        }
        if (oneOfs.length == 0) {
          throw new TypeError(
            `${data} doesn't match any type from ${oneOfMap[type]} ${oneOfs}`,
          );
        }
        return oneOfs[0];
      }

      if (!typeMap[type]) {
        // dont know the type
        throw new TypeError(`unknown type '${type}'`);
      }

      // get the map for the correct type.
      const attributesMap = typeMap[type].getAttributeTypeMap();
      const instance: { [index: string]: any } = {};

      for (const attributeName in data) {
        const attributeObj = attributesMap[attributeName];
        if (
          attributeName === "_unparsed" ||
          attributeName === "additionalProperties"
        ) {
          continue;
        } else if (
          attributeObj === undefined &&
          !("additionalProperties" in attributesMap)
        ) {
          throw new Error(
            "unexpected attribute " + attributeName + " of type " + type,
          );
        } else if (attributeObj) {
          instance[attributeObj.baseName] = ObjectSerializer.serialize(
            data[attributeName],
            attributeObj.type,
            attributeObj.format,
          );
        }
      }

      if (data.additionalProperties) {
        const additionalPropertiesMap = attributesMap["additionalProperties"];
        if (additionalPropertiesMap) {
          for (const key in data.additionalProperties) {
            instance[key] = ObjectSerializer.serialize(
              data.additionalProperties[key],
              additionalPropertiesMap.type,
              additionalPropertiesMap.format,
            );
          }
        } else {
          throw new Error(`additionalProperties found in ${type}`);
        }
      }

      // check for required properties
      for (const attributeName in attributesMap) {
        const attributeObj = attributesMap[attributeName];
        if (
          attributeObj?.required &&
          instance[attributeObj.baseName] === undefined
        ) {
          throw new Error(
            `missing required property '${attributeObj.baseName}'`,
          );
        }
      }

      return instance;
    }
  }

  public static deserialize(data: any, type: string, format: string = ""): any {
    if (data == undefined || type == "any") {
      return data;
    } else if (
      primitives.includes(type.toLowerCase()) &&
      typeof data == type.toLowerCase()
    ) {
      return data;
    } else if (type.startsWith(ARRAY_PREFIX)) {
      // Assert the passed data is Array type
      if (!Array.isArray(data)) {
        throw new TypeError(`mismatch types '${data}' and '${type}'`);
      }
      // Array<Type> => Type
      const subType: string = type.substring(
        ARRAY_PREFIX.length,
        type.length - 1,
      );
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.deserialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(TUPLE_PREFIX)) {
      // [Type,...] => Type
      const subType: string = type
        .substring(TUPLE_PREFIX.length, type.length - 1)
        .split(", ")[0];
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.deserialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3,
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.deserialize(
          data[key],
          subType,
          format,
        );
      }
      return transformedData;
    } else if (type === "Date") {
      try {
        return dateFromRFC3339String(data);
      } catch {
        return new Date(data);
      }
    } else {
      if (enumsMap[type]) {
        if (enumsMap[type].includes(data)) {
          return data;
        }
        return new UnparsedObject(data);
      }
      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            const d = ObjectSerializer.deserialize(data, oneOf, format);
            if (!d?._unparsed) {
              oneOfs.push(d);
            }
          } catch (e) {
            logger.debug(`could not deserialize ${oneOf} (${e})`);
          }
        }
        if (oneOfs.length != 1) {
          return new UnparsedObject(data);
        }
        return oneOfs[0];
      }

      if (!typeMap[type]) {
        // dont know the type
        throw new TypeError(`unknown type '${type}'`);
      }

      const instance = new typeMap[type]();
      const attributesMap = typeMap[type].getAttributeTypeMap();
      const attributesBaseNames = Object.keys(attributesMap).reduce(
        (o, key) => Object.assign(o, { [attributesMap[key].baseName]: "" }),
        {},
      );
      const extraAttributes = Object.keys(data).filter(
        (key) =>
          !Object.prototype.hasOwnProperty.call(attributesBaseNames, key),
      );

      if (extraAttributes.length > 0) {
        if ("additionalProperties" in attributesMap) {
          if (!instance.additionalProperties) {
            instance.additionalProperties = {};
          }

          const attributeObj = attributesMap["additionalProperties"];
          for (const key in extraAttributes) {
            instance.additionalProperties[extraAttributes[key]] =
              ObjectSerializer.deserialize(
                data[extraAttributes[key]],
                attributeObj.type,
                attributeObj.format,
              );
          }
        } else {
          throw new Error(
            `found extra attributes '${extraAttributes}' in ${type}`,
          );
        }
      }

      for (const attributeName in attributesMap) {
        const attributeObj = attributesMap[attributeName];
        if (attributeName === "additionalProperties") {
          continue;
        }

        instance[attributeName] = ObjectSerializer.deserialize(
          data[attributeObj.baseName],
          attributeObj.type,
          attributeObj.format,
        );

        // check for required properties
        if (attributeObj?.required && instance[attributeName] === undefined) {
          throw new Error(`missing required property '${attributeName}'`);
        }

        if (
          instance[attributeName] instanceof UnparsedObject ||
          instance[attributeName]?._unparsed
        ) {
          instance._unparsed = true;
        }

        if (Array.isArray(instance[attributeName])) {
          for (const d of instance[attributeName]) {
            if (d instanceof UnparsedObject || d?._unparsed) {
              instance._unparsed = true;
              break;
            }
          }
        }
      }

      return instance;
    }
  }

  /**
   * Normalize media type
   *
   * We currently do not handle any media types attributes, i.e. anything
   * after a semicolon. All content is assumed to be UTF-8 compatible.
   */
  public static normalizeMediaType(
    mediaType: string | undefined,
  ): string | undefined {
    if (mediaType === undefined) {
      return undefined;
    }
    return mediaType.split(";")[0].trim().toLowerCase();
  }

  /**
   * From a list of possible media types, choose the one we can handle best.
   *
   * The order of the given media types does not have any impact on the choice
   * made.
   */
  public static getPreferredMediaType(mediaTypes: Array<string>): string {
    /** According to OAS 3 we should default to json */
    if (!mediaTypes) {
      return "application/json";
    }

    const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
    let selectedMediaType: string | undefined = undefined;
    let selectedRank: number = -Infinity;
    for (const mediaType of normalMediaTypes) {
      if (mediaType === undefined) {
        continue;
      }
      const supported = supportedMediaTypes[mediaType];
      if (supported !== undefined && supported > selectedRank) {
        selectedMediaType = mediaType;
        selectedRank = supported;
      }
    }

    if (selectedMediaType === undefined) {
      throw new Error(
        "None of the given media types are supported: " + mediaTypes.join(", "),
      );
    }

    return selectedMediaType;
  }

  /**
   * Convert data to a string according the given media type
   */
  public static stringify(data: any, mediaType: string): string {
    if (mediaType === "application/json" || mediaType === "text/json") {
      return JSON.stringify(data);
    }

    throw new Error(
      "The mediaType " +
        mediaType +
        " is not supported by ObjectSerializer.stringify.",
    );
  }

  /**
   * Parse data from a string according to the given media type
   */
  public static parse(rawData: string, mediaType: string | undefined): any {
    try {
      return JSON.parse(rawData);
    } catch (error) {
      logger.debug(`could not parse ${mediaType}: ${error}`);
      return rawData;
    }
  }
}
