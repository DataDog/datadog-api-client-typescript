import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsLookupProcessorType } from "./LogsLookupProcessorType";

/**
 * Use the Lookup Processor to define a mapping between a log attribute
 * and a human readable value saved in the processors mapping table.
 * For example, you can use the Lookup Processor to map an internal service ID
 * into a human readable service name. Alternatively, you could also use it to check
 * if the MAC address that just attempted to connect to the production
 * environment belongs to your list of stolen machines.
 */
export class LogsLookupProcessor {
  /**
   * Value to set the target attribute if the source value is not found in the list.
   */
  "defaultLookup"?: string;
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Mapping table of values for the source attribute and their associated target attribute values,
   * formatted as `["source_key1,target_value1", "source_key2,target_value2"]`
   */
  "lookupTable": Array<string>;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Source attribute used to perform the lookup.
   */
  "source": string;
  /**
   * Name of the attribute that contains the corresponding value in the mapping list
   * or the `default_lookup` if not found in the mapping list.
   */
  "target": string;
  /**
   * Type of logs lookup processor.
   */
  "type": LogsLookupProcessorType;
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
    defaultLookup: {
      baseName: "default_lookup",
      type: "string",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    lookupTable: {
      baseName: "lookup_table",
      type: "Array<string>",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    target: {
      baseName: "target",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsLookupProcessorType",
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
    return LogsLookupProcessor.attributeTypeMap;
  }

  public constructor() {}
}
