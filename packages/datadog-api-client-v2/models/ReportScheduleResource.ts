/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReportScheduleIncludedResourceType } from "./ReportScheduleIncludedResourceType";
import { ReportScheduleResourceAttributes } from "./ReportScheduleResourceAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A report target resource included as a related JSON:API resource.
 */
export class ReportScheduleResource {
  /**
   * Attributes of an included report target resource.
   */
  "attributes": ReportScheduleResourceAttributes;
  /**
   * The resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type for an included report resource.
   */
  "type": ReportScheduleIncludedResourceType;

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
      type: "ReportScheduleResourceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReportScheduleIncludedResourceType",
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
    return ReportScheduleResource.attributeTypeMap;
  }

  public constructor() {}
}
