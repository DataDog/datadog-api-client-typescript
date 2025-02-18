/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityExclusionFilterAttributes } from "./ApplicationSecurityExclusionFilterAttributes";
import { ApplicationSecurityExclusionFilterMetadata } from "./ApplicationSecurityExclusionFilterMetadata";
import { ApplicationSecurityExclusionFilterType } from "./ApplicationSecurityExclusionFilterType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A JSON:API resource for an Application Security exclusion filter.
 */
export class ApplicationSecurityExclusionFilterResource {
  /**
   * Attributes describing an Application Security exclusion filter.
   */
  "attributes": ApplicationSecurityExclusionFilterAttributes;
  /**
   * The identifier of the exclusion filter.
   */
  "id"?: string;
  /**
   * Extra information about the exclusion filter.
   */
  "meta"?: ApplicationSecurityExclusionFilterMetadata;
  /**
   * Type of the resource. The value should always be `exclusion_filter`.
   */
  "type": ApplicationSecurityExclusionFilterType;

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
      type: "ApplicationSecurityExclusionFilterAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "ApplicationSecurityExclusionFilterMetadata",
    },
    type: {
      baseName: "type",
      type: "ApplicationSecurityExclusionFilterType",
      required: true,
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
    return ApplicationSecurityExclusionFilterResource.attributeTypeMap;
  }

  public constructor() {}
}
