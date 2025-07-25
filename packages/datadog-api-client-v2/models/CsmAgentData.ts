/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmAgentsAttributes } from "./CsmAgentsAttributes";
import { CSMAgentsType } from "./CSMAgentsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Single Agent Data.
 */
export class CsmAgentData {
  /**
   * A CSM Agent returned by the API.
   */
  "attributes"?: CsmAgentsAttributes;
  /**
   * The ID of the Agent.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `datadog_agent`.
   */
  "type"?: CSMAgentsType;

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
      type: "CsmAgentsAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CSMAgentsType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CsmAgentData.attributeTypeMap;
  }

  public constructor() {}
}
