/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotionCredentials } from "./NotionCredentials";
import { NotionIntegrationType } from "./NotionIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `NotionIntegration` object.
 */
export class NotionIntegration {
  /**
   * The definition of the `NotionCredentials` object.
   */
  "credentials": NotionCredentials;
  /**
   * The definition of the `NotionIntegrationType` object.
   */
  "type": NotionIntegrationType;

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
    credentials: {
      baseName: "credentials",
      type: "NotionCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotionIntegrationType",
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
    return NotionIntegration.attributeTypeMap;
  }

  public constructor() {}
}
