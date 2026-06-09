/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmAgentlessHostAttributes } from "./CsmAgentlessHostAttributes";
import { CsmAgentlessHostType } from "./CsmAgentlessHostType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single agentless host resource.
 */
export class CsmAgentlessHostData {
  /**
   * Attributes of an agentless host.
   */
  "attributes": CsmAgentlessHostAttributes;
  /**
   * The resource identifier of the agentless host.
   */
  "id": string;
  /**
   * The JSON:API type for agentless host resources. The value should always be `agentless_host`.
   */
  "type": CsmAgentlessHostType;

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
      type: "CsmAgentlessHostAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CsmAgentlessHostType",
      required: true,
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
    return CsmAgentlessHostData.attributeTypeMap;
  }

  public constructor() {}
}
