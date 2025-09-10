/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPMonitoredResourceConfigType } from "./GCPMonitoredResourceConfigType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration for a GCP monitored resource.
 */
export class GCPMonitoredResourceConfig {
  /**
   * List of filters to limit the monitored resources that are pulled into Datadog by using tags.
   * Only monitored resources that apply to specified filters are imported into Datadog.
   */
  "filters"?: Array<string>;
  /**
   * The GCP monitored resource type. Only a subset of resource types are supported.
   */
  "type"?: GCPMonitoredResourceConfigType;

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
    filters: {
      baseName: "filters",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "GCPMonitoredResourceConfigType",
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
    return GCPMonitoredResourceConfig.attributeTypeMap;
  }

  public constructor() {}
}
