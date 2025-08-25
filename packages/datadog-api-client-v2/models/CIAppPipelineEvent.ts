/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppPipelineEventAttributes } from "./CIAppPipelineEventAttributes";
import { CIAppPipelineEventTypeName } from "./CIAppPipelineEventTypeName";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object description of a pipeline event after being processed and stored by Datadog.
 */
export class CIAppPipelineEvent {
  /**
   * JSON object containing all event attributes and their associated values.
   */
  "attributes"?: CIAppPipelineEventAttributes;
  /**
   * Unique ID of the event.
   */
  "id"?: string;
  /**
   * Type of the event.
   */
  "type"?: CIAppPipelineEventTypeName;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "CIAppPipelineEventAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CIAppPipelineEventTypeName",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
