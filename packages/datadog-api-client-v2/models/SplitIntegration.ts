/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SplitCredentials } from "./SplitCredentials";
import { SplitIntegrationType } from "./SplitIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `SplitIntegration` object.
 */
export class SplitIntegration {
  /**
   * The definition of the `SplitCredentials` object.
   */
  "credentials": SplitCredentials;
  /**
   * The definition of the `SplitIntegrationType` object.
   */
  "type": SplitIntegrationType;

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
      type: "SplitCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SplitIntegrationType",
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
    return SplitIntegration.attributeTypeMap;
  }

  public constructor() {}
}
