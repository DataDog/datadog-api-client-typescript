/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventEmailAddressAlertType } from "./EventEmailAddressAlertType";
import { EventEmailAddressFormat } from "./EventEmailAddressFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating an on-call event email address.
 */
export class OnCallEventEmailAddressCreateAttributes {
  /**
   * The alert type of events generated from the email address.
   */
  "alertType"?: EventEmailAddressAlertType;
  /**
   * A description of the on-call event email address.
   */
  "description"?: string;
  /**
   * The format of events ingested through the email address.
   */
  "format": EventEmailAddressFormat;
  /**
   * A list of tags to apply to events generated from the email address.
   */
  "tags"?: Array<string>;
  /**
   * The team handle associated with the on-call email address.
   * Must contain only alphanumeric characters, hyphens, and underscores.
   */
  "teamHandle": string;

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
    alertType: {
      baseName: "alert_type",
      type: "EventEmailAddressAlertType",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    format: {
      baseName: "format",
      type: "EventEmailAddressFormat",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    teamHandle: {
      baseName: "team_handle",
      type: "string",
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
    return OnCallEventEmailAddressCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
