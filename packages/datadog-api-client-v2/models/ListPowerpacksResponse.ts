/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpackData } from "./PowerpackData";
import { PowerpackResponseLinks } from "./PowerpackResponseLinks";
import { PowerpacksResponseMeta } from "./PowerpacksResponseMeta";
import { User } from "./User";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object which includes all powerpack configurations.
 */
export class ListPowerpacksResponse {
  /**
   * List of powerpack definitions.
   */
  "data"?: Array<PowerpackData>;
  /**
   * Array of objects related to the users.
   */
  "included"?: Array<User>;
  /**
   * Links attributes.
   */
  "links"?: PowerpackResponseLinks;
  /**
   * Powerpack response metadata.
   */
  "meta"?: PowerpacksResponseMeta;

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
    data: {
      baseName: "data",
      type: "Array<PowerpackData>",
    },
    included: {
      baseName: "included",
      type: "Array<User>",
    },
    links: {
      baseName: "links",
      type: "PowerpackResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "PowerpacksResponseMeta",
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
    return ListPowerpacksResponse.attributeTypeMap;
  }

  public constructor() {}
}
