/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS Lambda forwarder
 */
export class AWSLambdaForwarderConfig {
  /**
   * List of Datadog Lambda Log Forwarder ARNs
   */
  "lambdas"?: Array<string>;
  /**
   * List of AWS services that will send logs to the Datadog Lambda Log Forwarder
   */
  "sources"?: Array<string>;

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
    lambdas: {
      baseName: "lambdas",
      type: "Array<string>",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
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
    return AWSLambdaForwarderConfig.attributeTypeMap;
  }

  public constructor() {}
}
