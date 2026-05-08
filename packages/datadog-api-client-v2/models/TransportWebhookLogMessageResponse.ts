/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The SMTP response information.
 */
export class TransportWebhookLogMessageResponse {
  /**
   * The enhanced SMTP status code.
   */
  "enhancedSmtpCode"?: string;
  /**
   * The SMTP response message.
   */
  "reason"?: string;
  /**
   * The SMTP status code.
   */
  "smtpCode"?: string;

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
    enhancedSmtpCode: {
      baseName: "enhanced_smtp_code",
      type: "string",
    },
    reason: {
      baseName: "reason",
      type: "string",
    },
    smtpCode: {
      baseName: "smtp_code",
      type: "string",
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
    return TransportWebhookLogMessageResponse.attributeTypeMap;
  }

  public constructor() {}
}
