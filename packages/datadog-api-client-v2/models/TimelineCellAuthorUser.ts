/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimelineCellAuthorUserContent } from "./TimelineCellAuthorUserContent";
import { TimelineCellAuthorUserType } from "./TimelineCellAuthorUserType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A user who authored a timeline cell.
 */
export class TimelineCellAuthorUser {
  /**
   * Profile information for the user who authored the timeline cell.
   */
  "content"?: TimelineCellAuthorUserContent;
  /**
   * The type of timeline cell author. Currently only `USER` is supported.
   */
  "type"?: TimelineCellAuthorUserType;

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
    content: {
      baseName: "content",
      type: "TimelineCellAuthorUserContent",
    },
    type: {
      baseName: "type",
      type: "TimelineCellAuthorUserType",
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
    return TimelineCellAuthorUser.attributeTypeMap;
  }

  public constructor() {}
}
