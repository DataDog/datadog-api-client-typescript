/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReportScheduleAuthorAttributes } from "./ReportScheduleAuthorAttributes";
import { ReportScheduleAuthorType } from "./ReportScheduleAuthorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A user included as a related JSON:API resource.
 */
export class ReportScheduleAuthor {
  /**
   * Attributes of the report author.
   */
  "attributes": ReportScheduleAuthorAttributes;
  /**
   * The user UUID.
   */
  "id": string;
  /**
   * JSON:API resource type for the included report author.
   */
  "type": ReportScheduleAuthorType;

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
      type: "ReportScheduleAuthorAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReportScheduleAuthorType",
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
    return ReportScheduleAuthor.attributeTypeMap;
  }

  public constructor() {}
}
