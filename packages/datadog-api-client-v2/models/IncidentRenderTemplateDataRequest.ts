/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentRenderedTemplateType } from "./IncidentRenderedTemplateType";
import { IncidentRenderTemplateDataAttributesRequest } from "./IncidentRenderTemplateDataAttributesRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for rendering a template.
 */
export class IncidentRenderTemplateDataRequest {
  /**
   * Attributes for rendering a template.
   */
  "attributes": IncidentRenderTemplateDataAttributesRequest;
  /**
   * Rendered template resource type.
   */
  "type": IncidentRenderedTemplateType;

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
      type: "IncidentRenderTemplateDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentRenderedTemplateType",
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
    return IncidentRenderTemplateDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
