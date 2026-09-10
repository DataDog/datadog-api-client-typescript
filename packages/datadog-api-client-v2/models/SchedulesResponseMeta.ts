/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SchedulesResponseMetaPage } from "./SchedulesResponseMetaPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata that is included in the response when listing schedules.
 */
export class SchedulesResponseMeta {
  /**
   * Metadata related to paging information that is included in the response when listing schedules.
   */
  "page"?: SchedulesResponseMetaPage;

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
    page: {
      baseName: "page",
      type: "SchedulesResponseMetaPage",
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
    return SchedulesResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
