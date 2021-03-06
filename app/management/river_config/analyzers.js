// Analyzers to be used for different object properties
var analyzers = {
    "none" : {
      "type" : "keyword"
    },
    "coma" : {
      "type" : "pattern",
      "lowercase" : false,
      "pattern" : ", "
    },
    "semicolon" : {
      "type" : "pattern",
      "lowercase" : false,
      "pattern" : "; "
    }
};

// Proprety mappings for pamdata
// Describe how properties get indexed into ElasticSearch
var pamdataMappings = {
    "Country" : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "?Name_of_policy_or_measure"  : {
        "type" : "string",
        "analyzer" : "none"
    },
    "Single_policy_or_measure__or_group_of_measures"  : {
        "type" : "string",
        "analyzer" : "none"
    },
    "Type_of_policy_instrument"  : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "Status_of_implementation"  : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "Policy_or_measure_impacting_emissions_under_the_EU_ETS__emissions_trading___the_ESD__outside_the_"  : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "Sector_s__affected"  : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "Total_GHG_emissions_reductions_in_2020__kt_CO2_equivalent_per_year_"  : {
        "type" : "double"
    },
    "Total_GHG_emissions_reductions_in_2030__kt_CO2_equivalent_per_year_"  : {
        "type" : "double"
    },
    "Objective"  : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "Entities_responsible_for_implementing_the_policy"  : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "Implementation_period_start"  : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "Is_the_policy_or_measure_related_to_a_Union_policy_"  : {
        "type" : "string",
        "analyzer" : "none"
    },
    "GHG_s__affected"  : {
        "type" : "string",
        "analyzer" : "coma"
    },
    "Projection_scenario_in_which_the_policy_or_measure_is_included"  : {
        "type" : "string",
        "analyzer" : "coma"
    }
};

var mappings = {
    'settings': {
        'analysis': {
            'analyzer': analyzers
        }
    },
    'mappings': {
        'resources': {
            'properties': pamdataMappings
        }
    }
};

module.exports = { 'mappings': mappings };
