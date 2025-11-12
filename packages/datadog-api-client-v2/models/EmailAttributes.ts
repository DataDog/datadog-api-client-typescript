/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EmailFormatType } from "./EmailFormatType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for an on-call email.
 */
export class EmailAttributes {
  /**
   * Whether the email is currently active.
   */
  "active"?: boolean;
  /**
   * Email address.
   */
  "address"?: string;
  /**
   * Optional display alias for the email.
   */
  "alias"?: string;
  /**
   * Preferred content formats for notifications.
   */
  "formats"?: Array<EmailFormatType>;

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
    active: {
      baseName: "active",
      type: "boolean",
    },
    address: {
      baseName: "address",
      type: "string",
    },
    alias: {
      baseName: "alias",
      type: "string",
    },
    formats: {
      baseName: "formats",
      type: "Array<EmailFormatType>",
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
    return EmailAttributes.attributeTypeMap;
  }

  public constructor() {}
}
