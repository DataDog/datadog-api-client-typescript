/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorAssetCategory } from "./MonitorAssetCategory";
import { MonitorAssetResourceType } from "./MonitorAssetResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents key links tied to a monitor to help users take action on alerts.
 * This feature is in Preview and only available to users with the feature enabled.
 */
export class MonitorAsset {
  /**
   * Indicates the type of asset this entity represents on a monitor.
   */
  "category": MonitorAssetCategory;
  /**
   * Name for the monitor asset
   */
  "name": string;
  /**
   * Represents the identifier of the internal Datadog resource that this asset represents. IDs in this field should be passed in as strings.
   */
  "resourceKey"?: string;
  /**
   * Type of internal Datadog resource associated with a monitor asset.
   */
  "resourceType"?: MonitorAssetResourceType;
  /**
   * URL link for the asset. For links with an internal resource type set, this should be the relative path to where the Datadog domain is appended internally. For external links, this should be the full URL path.
   */
  "url": string;

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
    category: {
      baseName: "category",
      type: "MonitorAssetCategory",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    resourceKey: {
      baseName: "resource_key",
      type: "string",
    },
    resourceType: {
      baseName: "resource_type",
      type: "MonitorAssetResourceType",
    },
    url: {
      baseName: "url",
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
    return MonitorAsset.attributeTypeMap;
  }

  public constructor() {}
}
