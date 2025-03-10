/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatadogAgentSourceType } from "./DatadogAgentSourceType";
import { Tls } from "./Tls";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Datadog Agent source component.
 */
export class DatadogAgentSource {
  /**
   * The unique ID of the source.
   */
  "id": string;
  /**
   * TLS settings
   */
  "tls"?: Tls;
  /**
   * The type of source.
   */
  "type": DatadogAgentSourceType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    tls: {
      baseName: "tls",
      type: "Tls",
    },
    type: {
      baseName: "type",
      type: "DatadogAgentSourceType",
      required: true,
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
    return DatadogAgentSource.attributeTypeMap;
  }

  public constructor() {}
}
