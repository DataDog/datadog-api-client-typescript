/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsSchemaCategoryMapperCategory } from "./LogsSchemaCategoryMapperCategory";
import { LogsSchemaCategoryMapperFallback } from "./LogsSchemaCategoryMapperFallback";
import { LogsSchemaCategoryMapperTargets } from "./LogsSchemaCategoryMapperTargets";
import { LogsSchemaCategoryMapperType } from "./LogsSchemaCategoryMapperType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Use the Schema Category Mapper to categorize log event into enum fields.
 * In the case of OCSF, they can be used to map sibling fields which are composed of an ID and a name.
 *
 * **Notes**:
 *
 * - The syntax of the query is the one of Logs Explorer search bar.
 *   The query can be done on any log attribute or tag, whether it is a facet or not.
 *   Wildcards can also be used inside your query.
 * - Categories are executed in order and processing stops at the first match.
 *   Make sure categories are properly ordered in case a log could match multiple queries.
 * - Sibling fields always have a numerical ID field and a human-readable string name.
 * - A fallback section handles cases where the name or ID value matches a specific value.
 *   If the name matches "Other" or the ID matches 99, the value of the sibling name field will be pulled from a source field from the original log.
 */
export class LogsSchemaCategoryMapper {
  /**
   * Array of filters to match or not a log and their
   * corresponding `name` to assign a custom value to the log.
   */
  "categories": Array<LogsSchemaCategoryMapperCategory>;
  /**
   * Used to override hardcoded category values with a value pulled from a source attribute on the log.
   */
  "fallback"?: LogsSchemaCategoryMapperFallback;
  /**
   * Name of the logs schema category mapper.
   */
  "name": string;
  /**
   * Name of the target attributes which value is defined by the matching category.
   */
  "targets": LogsSchemaCategoryMapperTargets;
  /**
   * Type of logs schema category mapper.
   */
  "type": LogsSchemaCategoryMapperType;

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
    categories: {
      baseName: "categories",
      type: "Array<LogsSchemaCategoryMapperCategory>",
      required: true,
    },
    fallback: {
      baseName: "fallback",
      type: "LogsSchemaCategoryMapperFallback",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    targets: {
      baseName: "targets",
      type: "LogsSchemaCategoryMapperTargets",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsSchemaCategoryMapperType",
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
    return LogsSchemaCategoryMapper.attributeTypeMap;
  }

  public constructor() {}
}
