/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppEventAttributes } from "./CIAppEventAttributes";
import { CIAppPipelineEventTypeName } from "./CIAppPipelineEventTypeName";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Object description of a pipeline event after being processed and stored by Datadog.
 */
export class CIAppPipelineEvent {
  /**
   * JSON object containing all event attributes and their associated values.
   */
  "attributes"?: CIAppEventAttributes;
  /**
   * Unique ID of the event.
   */
  "id"?: string;
  /**
   * Type of the event.
   */
  "type"?: CIAppPipelineEventTypeName | UnparsedObject;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "CIAppEventAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CIAppPipelineEventTypeName",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppPipelineEvent.attributeTypeMap;
  }

  public constructor() {}
}
