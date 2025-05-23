/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSCredentials } from "./AWSCredentials";
import { AWSIntegrationType } from "./AWSIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `AWSIntegration` object.
 */
export class AWSIntegration {
  /**
   * The definition of `AWSCredentials` object.
   */
  "credentials": AWSCredentials;
  /**
   * The definition of `AWSIntegrationType` object.
   */
  "type": AWSIntegrationType;

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
      type: "AWSCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSIntegrationType",
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
    return AWSIntegration.attributeTypeMap;
  }

  public constructor() {}
}
