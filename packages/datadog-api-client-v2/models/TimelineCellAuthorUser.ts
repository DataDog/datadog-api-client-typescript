/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimelineCellAuthorUserContent } from "./TimelineCellAuthorUserContent";
import { TimelineCellAuthorUserType } from "./TimelineCellAuthorUserType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * timeline cell user author
 */
export class TimelineCellAuthorUser {
  /**
   * user author content.
   */
  "content"?: TimelineCellAuthorUserContent;
  /**
   * user author type.
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
