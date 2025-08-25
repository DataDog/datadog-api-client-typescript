/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppCIErrorDomain } from "./CIAppCIErrorDomain";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Contains information of the CI error.
 */
export class CIAppCIError {
  /**
   * Error category used to differentiate between issues related to the developer or provider environments.
   */
  "domain"?: CIAppCIErrorDomain;
  /**
   * Error message.
   */
  "message"?: string;
  /**
   * The stack trace of the reported errors.
   */
  "stack"?: string;
  /**
   * Short description of the error type.
   */
  "type"?: string;

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
    domain: {
      baseName: "domain",
      type: "CIAppCIErrorDomain",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    stack: {
      baseName: "stack",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return CIAppCIError.attributeTypeMap;
  }

  public constructor() {}
}
